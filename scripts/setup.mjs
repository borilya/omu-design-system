// Установка рабочей копии OMU Design System. Инструкция — SETUP.md.
//
//   node scripts/setup.mjs                    проверить, всё ли на месте
//   node scripts/setup.mjs --fonts <путь>     разложить шрифты из папки или .zip
//   node scripts/setup.mjs --serve            поднять локальный просмотр
//
// Скрипт не меняет файлы под git: шрифты ложатся в 04-assets/fonts/,
// которая закрыта в .gitignore.

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import http from "node:http";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const fontsDir = path.join(root, "04-assets/fonts");
const args = process.argv.slice(2);
const option = (name) => {
  const index = args.indexOf(name);
  return index === -1 ? undefined : args[index + 1] ?? "";
};

const fontFiles = [
  "TT_Bluescreens_Pro_Extended_Bold.woff2",
  "TT_Bluescreens_Pro_Extended_Bold.woff",
  "TT_Bluescreens_Pro_Extended_Bold.ttf",
  "TT_Firs_Text_Normal.woff2",
  "TT_Firs_Text_Normal.woff",
  "TT-Firs-Text-Normal.ttf",
];
const licenseFiles = {
  bluescreens: "TT_Bluescreens_Pro-Desktop-License.pdf",
  firs: "TT_Firs_Text-Desktop-License.pdf",
};
const links = ["logo", "fonts", "renders"].map((name) =>
  path.join(root, "06-design-system/assets", name),
);

function walk(directory) {
  const files = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...walk(fullPath));
    else files.push(fullPath);
  }
  return files;
}

function unpack(archive) {
  const target = fs.mkdtempSync(path.join(os.tmpdir(), "omu-fonts-"));
  // tar умеет zip на Windows 10+, unzip есть на macOS и Linux
  const command = process.platform === "win32"
    ? ["tar", ["-xf", archive, "-C", target]]
    : ["unzip", ["-q", archive, "-d", target]];
  execFileSync(...command, { stdio: "inherit" });
  return target;
}

function installFonts(source) {
  const resolved = path.resolve(source.replace(/^~(?=$|\/|\\)/, os.homedir()));
  if (!fs.existsSync(resolved)) {
    console.error(`Нет такого пути: ${resolved}`);
    process.exit(1);
  }
  const directory = resolved.toLowerCase().endsWith(".zip") ? unpack(resolved) : resolved;
  const found = walk(directory);
  fs.mkdirSync(path.join(fontsDir, "licenses"), { recursive: true });

  for (const name of fontFiles) {
    const match = found.find((file) => path.basename(file).toLowerCase() === name.toLowerCase());
    if (match) fs.copyFileSync(match, path.join(fontsDir, name));
  }
  for (const file of found) {
    const lower = file.toLowerCase();
    if (!lower.endsWith(".pdf") || !lower.includes("license")) continue;
    const family = lower.includes("bluescreens") ? "bluescreens" : lower.includes("firs") ? "firs" : null;
    if (family) fs.copyFileSync(file, path.join(fontsDir, "licenses", licenseFiles[family]));
  }
}

function report() {
  let ok = true;
  const missingFonts = fontFiles.filter((name) => !fs.existsSync(path.join(fontsDir, name)));
  if (missingFonts.length === 0) {
    console.log("✓ Шрифты на месте: 04-assets/fonts/");
  } else {
    ok = false;
    console.log(`✗ Нет шрифтов (${missingFonts.length} из ${fontFiles.length}): ${missingFonts.join(", ")}`);
    console.log("  Шрифты выдаёт владелец бренда. Запусти: node scripts/setup.mjs --fonts <папка или .zip>");
    console.log("  Без них всё работает, но системным шрифтом.");
  }

  const brokenLinks = links.filter((link) => {
    try {
      return !fs.statSync(link).isDirectory();
    } catch {
      return true;
    }
  });
  if (brokenLinks.length === 0) {
    console.log("✓ Ссылки 06-design-system/assets/ → 04-assets/ и 03-product/renders/ работают");
  } else {
    ok = false;
    console.log("✗ Симлинки в 06-design-system/assets/ не работают — логотипы и рендеры в UI-китах не загрузятся.");
    console.log("  Обычно это Windows. Включи Developer Mode и склонируй заново:");
    console.log("  git clone -c core.symlinks=true https://github.com/borilya/omu-design-system.git");
  }

  console.log(ok ? "\nГотово. Просмотр: node scripts/setup.mjs --serve" : "\nЕсть что поправить — см. выше.");
  return ok;
}

function serve(port = 8765) {
  const types = {
    ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".jsx": "text/javascript",
    ".css": "text/css", ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png",
    ".woff2": "font/woff2", ".woff": "font/woff", ".ttf": "font/ttf", ".md": "text/plain; charset=utf-8",
  };
  http
    .createServer((request, response) => {
      const urlPath = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
      const file = path.join(root, urlPath);
      if (!file.startsWith(root + path.sep) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
        response.writeHead(404).end("Not found");
        return;
      }
      response.writeHead(200, { "Content-Type": types[path.extname(file)] ?? "application/octet-stream" });
      fs.createReadStream(file).pipe(response);
    })
    .listen(port, "127.0.0.1", () => {
      const base = `http://127.0.0.1:${port}/06-design-system`;
      console.log(`\nStyle guide: ${base}/OMU%20Style%20Guide.html`);
      console.log(`Сайт:        ${base}/ui_kits/web/index.html`);
      console.log(`Instagram:   ${base}/ui_kits/social/index.html`);
      console.log("Остановить: Ctrl+C");
    });
}

const fontsSource = option("--fonts");
if (fontsSource !== undefined) {
  if (!fontsSource) {
    console.error("Укажи путь: node scripts/setup.mjs --fonts <папка или .zip>");
    process.exit(1);
  }
  installFonts(fontsSource);
}
report();
if (args.includes("--serve")) serve();
