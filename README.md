# Gayathri Karri - Portfolio

Live at **https://hidden-profile.github.io/gayathri/**

Personal portfolio built with React. Single page, responsive from phones to desktops, with light and dark themes.

## Editing content

All text (experience, projects, skills, education, achievements, links) lives in [`src/data.js`](src/data.js).
Styles are in [`src/App.css`](src/App.css). The resume PDF served by the site is `public/Gayathri_Karri_Resume.pdf`;
its source is [`resume/resume.html`](resume/resume.html) (open in Chrome and print to PDF, A4, no headers).

## Run locally

```bash
npm install
npm start
```

## Deploy

Deploys are automatic. Every push to `main` runs the GitHub Actions workflow in
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the site and publishes it to the
`gh-pages` branch that GitHub Pages serves. Progress shows under the repo's **Actions** tab, and the site
updates a minute or two after it finishes.

`npm run deploy` still works from a terminal that is signed in to GitHub as `hidden-profile`.
