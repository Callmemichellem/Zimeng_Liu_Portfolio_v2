# Zimeng Liu Personal Portfolio

Static HTML/CSS/JavaScript site designed for GitHub Pages and PyCharm.

## Pages
- `index.html` — homepage, profile photo, contact, education, MBTI/strengths, debate, map teaser
- `experience.html` — detailed internship timeline with bilingual China-based company names and quantitative evidence
- `projects.html` — all major finance/data/AI/policy/competition projects
- `research.html` — RAG/GraphRAG and ESG research
- `journey.html` — interactive travel map
- `cv.html` — public CV summary

## Run locally in PyCharm
Open this folder, open Terminal, run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Custom domain
The visible brand says `zimengliu.com`, but that is only the site name until you register the domain. After purchase, rename `CNAME.example` to `CNAME` and keep one line: `zimengliu.com`. Then configure the domain in GitHub Pages and at your registrar.

## Photo
Profile image is `assets/img/zimeng-liu.jpg`. Replace it with another image using the same filename to update the site without editing HTML.

## Journey markers
Travel markers are stored once in `assets/js/main.js` inside the `TRAVEL_PLACES` array. Edit that one list to add/remove places or later add a `note`/story. Both the homepage and Journey page update automatically.
