# Mohamed Aasikilahi M — portfolio

Recruiter-facing site for a senior mobile developer (Flutter and native Android), including current enterprise work at Refex Group via OmegaHires.

This folder is a local preview. It is not deployed.

## Run

```bash
cd docs/portfolio
npm install
npm run dev
```

Production preview:

```bash
npm run build
npm run start
```

The dev server defaults to [http://localhost:3000](http://localhost:3000).

## Edit the words

All visible copy, dates, skills, employers, and projects live in [`content/site.ts`](content/site.ts). Components only render that file.

A longer editing guide is in [`../how-to-edit-portfolio.md`](../how-to-edit-portfolio.md).

## Resume download

`public/Mohamed-Aasikilahi-M-Resume.docx` is the file behind **Download Resume**.

`public/Mohamed-Aasikilahi-M-Resume.pdf` is offered beside it when that file is present. Keep the PDF in sync with the Word file, or delete the PDF so the site stops offering a stale copy.

The same two files are also kept next to this project, in `docs/`, for handing to a recruiter without opening the site.
