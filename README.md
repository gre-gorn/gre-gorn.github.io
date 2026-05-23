# Portfolio timeline template

Template inspired by the `nicks-gamedev-portfolio.webflow.io` layout: a large
hero, a vertical timeline, entries with the date on the left and content on the
right, media slots, tags, links, and notes for future expansion.

## How to edit

- Timeline content lives in `script.js`, in the `timelineItems` array.
- Styles live in `styles.css`.
- Contact details and the hero live in `index.html`.
- Images can be replaced later in the markup, or `timelineItems` can be extended
  with an `image` field.
- Timeline badge icons should be prepared to fill the whole rectangular badge.
  Use `badgeFill: true` for full-bleed icon artwork instead of leaving a small
  centered symbol inside the frame.

## Running

The simplest option is to open `index.html` in a browser. You can also start a
local server:

```bash
python3 -m http.server 8000
```

and visit `http://localhost:8000`.
