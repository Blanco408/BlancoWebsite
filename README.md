# William Blanco — Personal Portfolio

A multi-page personal portfolio site built with semantic HTML5, No frameworks, no build tools, no dependencies.

**Live site:** [https://blancowebsite.blancow408.workers.dev](https://blancowebsite.blancow408.workers.dev)

**GitHub:** [https://github.com/Blanco408](https://github.com/Blanco408)

---

## Stack

| Layer | Choice |
|-------|--------|
| Markup | Semantic HTML5 |
| Styles | Vanilla CSS — custom properties, flexbox, grid, clamp() |
| Scripts | Vanilla JavaScript |
| Hosting | Cloudflare Pages |
| Forms | mailto: fallback |

---

## Pages

| File | Description |
|------|-------------|
| `index.html` | About / home page |
| `resume.html` | Full résumé as a browsable page |
| `projects.html` | Project showcase + GitHub API widget |
| `contact.html` | Contact form + direct links |

---

## Application Demonstration

**File:** `js/github.js`  
**Location:** `projects.html` — "GitHub Repositories" section

The widget fetches live data from the **GitHub REST API** (`api.github.com/users/Blanco408/repos`), parses the JSON response, and renders the 6 most recently updated public repositories as cards showing the repo name, description, language, stars, and last updated date. Includes a loading state while fetching and an error message if the request fails. No API key required.

Without JavaScript the static featured project cards above remain fully visible and the page is still useful.

---

## Running Locally

No build step required:

```bash
# Option 1 — Python
python3 -m http.server 8080
# visit http://localhost:8080

# Option 2 — Node
npx http-server -p 8080
# visit http://localhost:8080
```

Or just open `index.html` directly in a browser.

---

## File Structure

```
portfolio/
├── index.html
├── resume.html
├── projects.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── github.js
├── assets/
│   └── Blanco_Cubic_Resume.pdf
└── README.md
```