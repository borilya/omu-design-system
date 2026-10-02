# UI kit — instagram / omu

The Instagram profile as `05-applications/social.md` fixes it: handle `omu` lowercase, symbol avatar, bio taken from the platform one-liner (`want`, not `need`), five highlights — Spaces · Details · Colors · At Home · Press.

| File | Piece |
|---|---|
| `index.html` | Profile with a clickable grid |
| `ProfileHeader.jsx` | Avatar, handle, counts, bio |
| `Highlights.jsx` | The five fixed highlight covers |
| `PostGrid.jsx` | 3×3 grid, no text or plates over any frame |
| `PostView.jsx` | Post overlay with caption |

The real grid is interior shots across mixed surfaces (oak, parquet, ceramic, fabric). Six interior renders now exist in `03-product/renders/interior/`; this kit still uses studio renders as stand-ins.
