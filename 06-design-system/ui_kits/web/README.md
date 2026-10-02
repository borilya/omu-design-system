# UI kit — omu.com

Recreation of the OMU web surface as the repo defines it: SEO strings, the confirmed eight-tile feature block, and the five colorways. Landing page structure, grid, and container width are **not** specified upstream (`05-applications/web.md` lists them as open) — the layout here is a reasonable reading of the brand, not canon.

| File | Screen |
|---|---|
| `index.html` | Click-through app: Home → Extension cord → Colours |
| `SiteHeader.jsx` | Sticky header, wordmark + three links + Buy |
| `Landing.jsx` | Hero, Black statement plane, eight-tile feature block, colorway strip |
| `ProductPage.jsx` | Gallery with view toggle, colorway picker, spec list |
| `ColorsPage.jsx` | Five colorways with Pantone pairs |
| `SiteFooter.jsx` | Black surface, single newsletter field, tagline |

Notes: interior renders now exist in `03-product/renders/interior/`, but this kit still uses studio renders only. The **Certified safe** and **Fast-charging USB-C** tiles from the source table are deliberately replaced — both are on the closed-claims list for anything external.
