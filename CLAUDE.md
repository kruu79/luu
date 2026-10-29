# luu

Static multilingual (LV/EN, maybe RU) website for laivinsunupite.lv, hosted on GitHub Pages.

- Stack: Eleventy 3 (Nunjucks layouts, Markdown content), Tailwind CSS v4, deployed via GitHub Actions.
- `src/<lang>/` holds page content, `src/_includes/layouts/` holds templates.
- `assets/` holds client source material (gitignored, never commit it); `docs/todo.md` is the backlog.
- `npm start` runs the dev server, `npm run build` builds to `_site/`.
