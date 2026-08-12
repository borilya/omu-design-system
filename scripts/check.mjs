import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";

const root = process.cwd();
const errors = [];
const warnings = [];
const ignoredDirectories = new Set([".git", "node_modules"]);

function relative(file) {
  return path.relative(root, file).split(path.sep).join("/");
}

function walk(directory) {
  const files = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.isDirectory() && ignoredDirectories.has(entry.name)) continue;
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...walk(fullPath));
    else files.push(fullPath);
  }
  return files;
}

function read(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

function requireFile(file, context) {
  if (!fs.existsSync(path.join(root, file))) {
    errors.push(`${context}: отсутствует ${file}`);
  }
}

function parseJson(file) {
  try {
    return JSON.parse(read(file));
  } catch (error) {
    errors.push(`${file}: невалидный JSON (${error.message})`);
    return null;
  }
}

function sha256(file) {
  return createHash("sha256").update(fs.readFileSync(file)).digest("hex");
}

function validateDocumentManifest(file, collectionName, fileField) {
  const manifest = parseJson(file);
  if (!manifest) return null;

  const records = manifest[collectionName];
  if (!Array.isArray(records)) {
    errors.push(`${file}: поле ${collectionName} должно быть массивом`);
    return manifest;
  }

  const seenIds = new Set();
  for (const record of records) {
    if (!record.id) {
      errors.push(`${file}: запись без id`);
      continue;
    }
    if (seenIds.has(record.id)) {
      errors.push(`${file}: повторяется id ${record.id}`);
    }
    seenIds.add(record.id);

    const documentFiles = record[fileField] ?? [];
    if (!Array.isArray(documentFiles)) {
      errors.push(`${file}: ${record.id}.${fileField} должно быть массивом`);
      continue;
    }
    if (record.status === "available" && documentFiles.length === 0) {
      errors.push(`${file}: ${record.id} available, но файлы не указаны`);
    }

    for (const document of documentFiles) {
      if (!document.path || !document.sha256) {
        errors.push(`${file}: ${record.id} — у файла нужны path и sha256`);
        continue;
      }

      const absolutePath = path.join(root, document.path);
      if (!fs.existsSync(absolutePath)) {
        errors.push(`${file}: ${record.id} — отсутствует ${document.path}`);
        continue;
      }

      const actualChecksum = sha256(absolutePath);
      if (actualChecksum !== document.sha256) {
        errors.push(
          `${file}: ${record.id} — checksum не совпадает для ${document.path}`,
        );
      }
    }
  }

  return manifest;
}

const allFiles = walk(root);
const markdownFiles = allFiles.filter((file) => file.endsWith(".md"));

for (const file of markdownFiles) {
  const content = fs.readFileSync(file, "utf8");
  const linkPattern = /\[[^\]]*]\(([^)]+)\)/g;

  for (const match of content.matchAll(linkPattern)) {
    const rawTarget = match[1].trim();
    if (
      !rawTarget ||
      rawTarget.startsWith("#") ||
      /^(https?:|mailto:)/i.test(rawTarget)
    ) {
      continue;
    }

    const targetWithoutAnchor = rawTarget.split("#")[0];
    let decodedTarget;
    try {
      decodedTarget = decodeURIComponent(targetWithoutAnchor);
    } catch {
      errors.push(`${relative(file)}: некорректный URL в ссылке ${rawTarget}`);
      continue;
    }

    const resolved = path.resolve(path.dirname(file), decodedTarget);
    if (!fs.existsSync(resolved)) {
      errors.push(`${relative(file)}: битая ссылка ${rawTarget}`);
    }
  }
}

const statusCandidates = markdownFiles.filter((file) => {
  const fileName = path.basename(file);
  const projectPath = relative(file);
  if (fileName === "README.md") return false;
  if (projectPath === "01-brand/brand-platform.md") return false;
  return /^(01-brand|02-identity|03-product|05-applications)\//.test(projectPath);
});

for (const file of statusCandidates) {
  if (!fs.readFileSync(file, "utf8").includes("**Статус:**")) {
    errors.push(`${relative(file)}: нет строки **Статус:**`);
  }
}

const tokens = parseJson("02-identity/tokens.json");

if (tokens) {
  const tokenFiles = [
    ...Object.values(tokens.logo?.files ?? {}),
    tokens.typography?.family?.heading?.file,
    tokens.typography?.family?.body?.file,
  ].filter(Boolean);

  for (const file of tokenFiles) {
    requireFile(file, "tokens.json");
  }

  if (tokens.typography?.license === "trial-only") {
    warnings.push("типографика помечена trial-only; внешний релиз заблокирован");
  }
}

const renderDirectories = ["hero", "front", "top"].map((directory) =>
  path.join(root, "03-product/renders", directory),
);
const renderFiles = renderDirectories
  .flatMap((directory) =>
    fs
      .readdirSync(directory)
      .filter((file) => file.endsWith(".png"))
      .map((file) => path.join(directory, file)),
  );
const renderCatalog = read("03-product/renders/README.md");
const interiorDirectory = path.join(root, "03-product/renders/interior");
const interiorFiles = fs
  .readdirSync(interiorDirectory)
  .filter((file) => file.endsWith(".png"))
  .map((file) => path.join(interiorDirectory, file));
const interiorCatalog = read("03-product/renders/interior/README.md");

for (const file of renderFiles) {
  if (!renderCatalog.includes(path.basename(file))) {
    errors.push(`03-product/renders/README.md: не описан ${path.basename(file)}`);
  }
}

for (const file of interiorFiles) {
  if (!interiorCatalog.includes(path.basename(file))) {
    errors.push(
      `03-product/renders/interior/README.md: не описан ${path.basename(file)}`,
    );
  }
}

const status = read("STATUS.md");
const documentedRenderCount = status.match(
  /(\d+)\s+студийных(?:\s+рендеров|\s+и)/,
)?.[1];
if (!documentedRenderCount) {
  errors.push("STATUS.md: не удалось найти количество студийных рендеров");
} else if (Number(documentedRenderCount) !== renderFiles.length) {
  errors.push(
    `STATUS.md: указано ${documentedRenderCount} студийных рендеров, найдено ${renderFiles.length}`,
  );
}

const documentedInteriorCount = status.match(
  /(\d+)\s+интерьерных рендеров/,
)?.[1];
if (!documentedInteriorCount) {
  errors.push("STATUS.md: не удалось найти количество интерьерных рендеров");
} else if (Number(documentedInteriorCount) !== interiorFiles.length) {
  errors.push(
    `STATUS.md: указано ${documentedInteriorCount} интерьерных рендеров, найдено ${interiorFiles.length}`,
  );
}

requireFile("03-product/cmf/OMU_CMF_REV03.pdf", "CMF Rev. 03");

const sourceManifest = validateDocumentManifest(
  "_meta/source-manifest.json",
  "sources",
  "repositoryFiles",
);
const evidenceManifest = validateDocumentManifest(
  "03-product/evidence/manifest.json",
  "evidence",
  "documentFiles",
);

if (sourceManifest) {
  const sourceIds = new Set(sourceManifest.sources.map((source) => source.id));
  const sourceReferences = [
    ...read("_meta/sources.md").matchAll(/\bSRC-\d{3}\b/g),
    ...read("_meta/open-questions.md").matchAll(/\bSRC-\d{3}\b/g),
  ].map((match) => match[0]);
  for (const sourceId of new Set(sourceReferences)) {
    if (!sourceIds.has(sourceId)) {
      errors.push(`документация ссылается на отсутствующий ${sourceId}`);
    }
  }

  const missingSources = sourceManifest.sources.filter(
    (source) => source.status === "missing",
  );
  if (missingSources.length > 0) {
    warnings.push(
      `первичные источники missing: ${missingSources.map((source) => source.id).join(", ")}`,
    );
  }
}

if (evidenceManifest) {
  const evidenceIds = new Set(
    evidenceManifest.evidence.map((evidence) => evidence.id),
  );
  const claims = read("03-product/claims.md");
  const evidenceReferences = [
    ...claims.matchAll(/\bEVID-\d{3}\b/g),
  ].map((match) => match[0]);

  for (const evidenceId of new Set(evidenceReferences)) {
    if (!evidenceIds.has(evidenceId)) {
      errors.push(`03-product/claims.md ссылается на отсутствующий ${evidenceId}`);
    }
  }
  for (const evidenceId of evidenceIds) {
    if (!evidenceReferences.includes(evidenceId)) {
      warnings.push(`${evidenceId} не связан ни с одним claim`);
    }
  }

  const missingEvidence = evidenceManifest.evidence.filter(
    (evidence) => evidence.status === "missing",
  );
  if (missingEvidence.length > 0) {
    warnings.push(
      `технические доказательства missing: ${missingEvidence.map((evidence) => evidence.id).join(", ")}`,
    );
  }
}

if (errors.length > 0) {
  console.error(`Ошибки (${errors.length}):`);
  for (const error of errors) console.error(`- ${error}`);
}

if (warnings.length > 0) {
  console.warn(`Предупреждения (${warnings.length}):`);
  for (const warning of warnings) console.warn(`- ${warning}`);
}

if (errors.length > 0) {
  process.exitCode = 1;
} else {
  console.log(
    `OK: ${markdownFiles.length} Markdown-файлов, ${renderFiles.length} студийных и ${interiorFiles.length} интерьерных рендеров, tokens.json, manifest-файлы, checksum и локальные ссылки проверены.`,
  );
}
