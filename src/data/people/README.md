# Team members

Each person on the team is one JSON file in this folder. The About page
(`src/pages/about.astro`) reads every `*.json` file here automatically and sorts
people into **Current Team** and **Alumni**, so you never edit the page itself —
you just add or change a data file.

## Add yourself (current students)

1. Add your photo to `public/people/` (e.g. `public/people/your_name.png`).
   A square image around 400×400px works well. If you don't add a photo, the
   site falls back to an avatar generated from your initials.
2. Copy `_example.json` to a new file named after you, e.g. `your_name.json`.
   (Files starting with `_` are ignored, so `_example.json` never appears on the site.)
3. Fill in the fields (see below), then open a pull request.

Because everyone gets their own file, two students adding themselves at the same
time won't create a merge conflict.

## Fields

| Field    | Required | Notes |
|----------|----------|-------|
| `name`   | yes      | Your full name. |
| `status` | yes      | `"current"` while you're on the team, `"alumni"` after you leave. |
| `photo`  | no       | Path under `public/`, e.g. `/people/your_name.png`. Omit to use a generated avatar. |
| `role`   | no       | Defaults to "Undergraduate Researcher". |
| `order`  | no       | Lower numbers sort first in the Current Team list. Alumni are sorted alphabetically. |
| `link`   | no       | A personal site or GitHub profile; makes your name a link. |

## When you graduate

Change your own `status` from `"current"` to `"alumni"`. That's the only edit
needed — the About page moves you to the Alumni section automatically.
