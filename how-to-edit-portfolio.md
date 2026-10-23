# How to edit the portfolio

The site is a Next.js app in `docs/portfolio`. Nothing on the page is typed into the components. Change `docs/portfolio/content/site.ts`, save, and refresh.

## Run it

From `docs/portfolio`:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

`npm run build` then `npm run start` serves the production build, also on port 3000 unless you pass `-p`.

## Where the content lives

`docs/portfolio/content/site.ts` holds:

- Name, title, email, phone, location, LinkedIn, and the GitHub field
- About, skills, highlights, leadership, and contact lines
- Every employer: company, title, dates, responsibilities, technologies
- Every project: overview, problem, role, stack, challenges, implementation, outcome, and the empty link fields

Employers are the `roles` array. Refex Group is the first entry (`id: "refex"`). Its `responsibilities` array is the confirmed Refex work. Edit those strings in place. Do not leave them blank, and do not add a duty that is not yours to explain.

Projects are the `projects` array. The four current ones use `band: "current"`:

- `refexone-it-help-desk`
- `kissflow-itsm`
- `notification-engine`
- `whatsapp-bot`

RefexOne is the only one of those marked with mobile support. The ITSM dashboards and the Notification Engine are not Flutter apps. Do not add Flutter to their `stack` arrays unless you are describing the separate Android/iOS support already written in the Refex role.

Older mobile apps stay in `band: "featured"` (RSA Buddy, DearO, Fit Valuation, RSA Pay) and `band: "earlier"`.

## Replace the illustrative panels

Cards and case studies draw an abstract stack diagram when `screenshot` is `""`. The caption on the page says **Illustrative** and **Not a product screenshot**. That diagram is not a picture of RSA Buddy, DearO, RefexOne, or any other product.

To show a real screenshot:

1. Put the image in `docs/portfolio/public/projects/`. Example: `public/projects/rsa-buddy.png`.
2. In that project’s object in `content/site.ts`, set:

```ts
screenshot: "/projects/rsa-buddy.png",
screenshotAlt: "RSA Buddy case list on Android",
```

Use a short `screenshotAlt` that describes the image. The case study then shows the image and drops the illustrative panel. Do not leave a real screenshot in place while the caption still says illustrative. Filling `screenshot` is what switches the label.

## App Store, GitHub, LinkedIn

Empty strings render as visible placeholders (“add your URL”). They are not links.

- LinkedIn is already set from the resume: `profile.linkedinUrl`.
- GitHub is empty: `profile.githubUrl`. Paste a real profile URL, including `https://`.
- Each project has `playStoreUrl` and `githubUrl`.
- Play Store links are filled only where the resume hyperlink matches that project: RSA Buddy, DearO, San CLM, SanZen, San SFE, and Go Diary.
- TVS Fit and Fit Valuation are intentionally blank. In the Word file, the TVS Fit link points at the DearO package, and the Fit Valuation link points at `com.tvsfit.inspection`. Do not guess which listing is which. Paste the correct URL yourself when you know it.
- Refex projects are internal. Leave `playStoreUrl` empty unless a public listing actually exists.

## Resume file the button downloads

**Download Resume** serves:

`docs/portfolio/public/Mohamed-Aasikilahi-M-Resume.docx`

A PDF button appears only when this file also exists:

`docs/portfolio/public/Mohamed-Aasikilahi-M-Resume.pdf`

Copies for sending by email, outside the site, are:

- `docs/Mohamed-Aasikilahi-M-Resume.docx`
- `docs/Mohamed-Aasikilahi-M-Resume.pdf`

If you edit the Word document, replace both `.docx` copies. Then either export a new PDF over both `.pdf` copies, or delete both PDFs so the site does not offer an old PDF next to a new Word file.

The Word file is the one to treat as the source. The PDF is a LibreOffice export of that same file.

## What not to add

Do not invent metrics, store ratings, headcount, or a Refex title other than **Software Developer – Flutter / Android & Enterprise Application Development**. The hero can keep **Senior Mobile Application Developer**. That senior title is the professional headline, not the Refex job title.
