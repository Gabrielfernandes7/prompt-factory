# Repository Guidelines

## Project Structure & Module Organization

Prompt Factory is a dependency-free vanilla HTML/CSS/JavaScript application. The browser entry point is `index.html` at the repository root. JavaScript modules live in `js/`: `app.js` coordinates the application, `builder.js`, `explore.js`, `prompt.js`, and `ui.js` contain feature logic, and `js/data/` contains framework, technique, and use-case data. Styles are split into design tokens, base styles, themes, components, exploration, and responsive rules under `css/`. Product and domain documentation is in `docs/FACTORY_PROMPT.md`. `html/` is reserved for future fragments; do not move the main markup there without updating the entry point.

## Build, Test, and Development Commands

There is no package manager, build script, or automated test runner currently configured. Run the app through a local HTTP server so ES modules work correctly:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/`. For a quick static check, inspect the changed files and load the page in a browser with DevTools open. Keep changes dependency-free unless the project direction explicitly changes.

## Coding Style & Naming Conventions

Use four spaces in HTML, CSS, and JavaScript, semicolons in JavaScript, and single-quoted JavaScript strings. Prefer small ES modules and existing DOM/data patterns over introducing a framework. Use `camelCase` for JavaScript variables and functions, descriptive `PascalCase` only for classes, kebab-case for CSS classes and IDs, and lowercase kebab-case for data IDs. Keep user-facing copy in Brazilian Portuguese and preserve accessible labels, semantic elements, and `data-*` attributes.

## Testing Guidelines

No automated test framework or coverage threshold is present. Manually verify Explore recommendations, framework selection, form/preview updates, copy and clear actions, theme switching, Few-Shot controls, library search/filtering, responsive layouts, and browser-console errors after every behavior change.

## Commit & Pull Request Guidelines

Existing commits use short, imperative-style summaries, often with a scope, for example `refactor design(ui/ux): ...`. Follow that pattern when practical. Pull requests should explain the user-visible change, list manual verification steps, identify affected files, and include before/after screenshots for visual changes. Keep unrelated refactors out of feature changes.

## Documentation & Product Constraints

Treat `docs/FACTORY_PROMPT.md` as the product authority. Preserve the principle that the user writes the prompt: examples and recommendations should guide structure without silently filling user content or adding persistence in the MVP.
