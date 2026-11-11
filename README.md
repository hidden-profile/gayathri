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

```bash
npm run deploy
```

This builds the app and publishes the `build` folder to the `gh-pages` branch, which GitHub Pages serves.
