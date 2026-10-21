# A little birthday magic

A dreamy midnight birthday surprise built with HTML, CSS and JavaScript. No npm, Python server, API keys or build step required.

## Preview

Extract this ZIP, then double-click `index.html`. Keep all four website files in the same folder.

## Personalise

Open `config.js` in VS Code. Change `name`, `from`, and each paragraph in `letter`. Save and refresh the page. Text is inserted safely as plain text. No visitor information or wishes are collected.

## Put it on GitHub and get a shareable link

1. Sign in to GitHub and create a repository named `birthday-surprise`. For the simplest GitHub Free setup, choose **Public**.
2. Open the repository and select **Add file → Upload files** (on an empty repository, use the **uploading an existing file** link).
3. Upload `index.html`, `style.css`, `script.js`, and `config.js` directly into the repository root. Upload the extracted files, not the ZIP or a parent folder. Commit the changes.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch **main** and folder **/(root)**, then **Save**.
7. Wait for deployment. GitHub says publication can take up to 10 minutes. Return to Settings → Pages and use **Visit site** to get the exact shareable URL.
8. Open the URL on your phone and click through the whole surprise before sharing it.

Your URL will follow the pattern `https://YOUR-USERNAME.github.io/birthday-surprise/`. This is a pattern, not an already deployed link. Pushing files alone does not enable Pages; complete the Settings steps.

To update the message later, edit `config.js` in GitHub and commit it. Pages republishes from the selected branch. The published page and a public repository can be read by anyone; choose letter text you are comfortable sharing publicly.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Optional: push from VS Code

Create an empty GitHub repository first, open this extracted folder in VS Code, then run these commands in its terminal. Replace YOUR-USERNAME with your GitHub username. Authenticate through GitHub's normal sign-in flow when prompted.

```bash
git init
git add index.html style.css script.js config.js README.md
git commit -m "Create birthday surprise"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/birthday-surprise.git
git push -u origin main
```

Then enable Pages using steps 4–7 above.

## Experience

Click the candle or its button → flame goes out with smoke → cake and confetti appear → make a wish → open the envelope → read the letter → replay.

Touch and keyboard controls, responsive CSS, visible focus indicators, and reduced-motion preferences are supported. No microphone is required: blowing is a click animation. Fonts load from Google Fonts when available, with local fallback fonts when offline. All illustrations are made in CSS.

## Validation

JavaScript syntax checked. The candle, cake reveal, wish, envelope, letter, and replay flow were checked in a desktop browser. Mobile styling is included; check on your own phone before sending.
