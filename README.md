# Michael Raffanti — Portfolio

A responsive portfolio template with two sections: **Job Rotation Program** and **Experience & Academic Work**. Inspired by the two-section organization of River Alaqidy's portfolio; the implementation and placeholder copy are original.

## Customize

Edit **content.js** to replace bracketed placeholders with your roles, dates, projects, education, and skills. All placeholder achievements are intentionally unfilled. The name and GitHub link are already set for Michael Raffanti / mikeyraff.

- `rotations`: four placements, their status, accomplishments, and skills.
- `development`: workshops, conferences, and certifications.
- `experience`, `education`, `projects`: work outside the program and academic work.
- `linkedin`, `email`, `resume`: optional contact links. Empty values stay hidden.
- Project `url`: paste a full GitHub or demo URL; empty values show “Project link coming soon.”

Use double quotes around text, and escape any double quotes inside text with a backslash. Keep commas between items. Copy an existing entry to add another project or role. General page headings and About text are in **index.html**; colors, spacing, and typography are in **styles.css**. If changing the name, also update the HTML description and favicon initials.

## Preview

Download the repository ZIP, extract it, and open **index.html** in a browser. No installation, dependencies, or build step is required. Alternatively run `python -m http.server 8000` in this folder and visit `http://localhost:8000`.

## Publish with GitHub Pages

First extract the downloaded ZIP. In your GitHub repository, choose **Add file → Upload files** and upload the files inside the extracted folder directly to the repository root (do not upload the ZIP or nest them in a second portfolio folder). Commit to `main`. The `.nojekyll` file is optional if your file picker hides it; this template also works with the default Pages processing.

Then:

1. Open the repository's **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Select **main** and **/(root)**, then click **Save**.
4. Wait for GitHub's Pages deployment to complete. The site address will be **https://mikeyraff.github.io/portfolio/**.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

Later edits committed to the publishing branch will update the site. Replace placeholders before sharing it as a finished portfolio.

## Files

- `index.html`: semantic layout and page sections.
- `content.js`: editable portfolio information.
- `script.js`: rendering and section navigation, including direct links and browser Back/Forward.
- `styles.css`: responsive light/red and dark/amber themes.
- `favicon.svg`: MR monogram icon.
- `.nojekyll`: serves the site as plain static files.

The site uses system fonts and local assets, with no analytics, external scripts, or package dependencies. Navigation uses standard links, supports keyboard interaction, and reflects the active section in the URL. JavaScript is required to display portfolio entries.
