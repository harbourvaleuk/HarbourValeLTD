# Harbour Vale website

A static site for GitHub Pages. No build step and no dependencies.

## Files
- `index.html` the homepage
- `styles.css` all styling
- `script.js` contact form logic and an editable `SITE` config at the top
- `privacy.html` full UK GDPR privacy notice (add your company number when issued)
- `404.html` shown for missing pages
- `CNAME` tells GitHub Pages to use harbourvale.co.uk
- `.nojekyll` stops GitHub from processing the files

## 1. Set up the contact form
1. Create a free account at https://formspree.io and add a new form using the email address that should receive enquiries.
2. Copy the form ID (the part after `/f/`).
3. In `index.html`, replace `YOUR_FORM_ID` in the `<form action="...">` line.

## 2. Publish on GitHub Pages
1. Create a new repository on GitHub (for example `harbourvale-site`) and upload every file in this folder, including `CNAME` and `.nojekyll`.
2. Go to Settings > Pages. Under Source choose "Deploy from a branch", pick `main` and `/ (root)`, then Save.
3. Under Custom domain enter `harbourvale.co.uk`, then tick "Enforce HTTPS" once it becomes available.

## 3. Point your domain at GitHub
At your domain registrar, add these DNS records:

| Type  | Name | Value |
|-------|------|-------|
| A     | @    | 185.199.108.153 |
| A     | @    | 185.199.109.153 |
| A     | @    | 185.199.110.153 |
| A     | @    | 185.199.111.153 |
| CNAME | www  | YOUR-GITHUB-USERNAME.github.io |

Remove any old A records that point elsewhere. DNS can take from a few minutes up to 24 hours.
Check GitHub's current guidance at https://docs.github.com/pages if anything differs.

## 4. Fill in details as you grow
- **Email, Amazon and eBay links:** edit the `SITE` block at the top of `script.js`. Empty values stay hidden.
- **Company number:** when your incorporation is approved, uncomment the registration line in the footer of `index.html` and add your company number.
- **Where we sell:** as each channel goes live, update its label in `index.html`
  (for example change "Coming next" to "Live" on eBay).
