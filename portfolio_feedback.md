1. Clean up the repo (do this first)

Remove the accidentally-committed node_modules and stray files (run from your repo root, where the outer my-portfolio folder and node_modules sit side by side):

bash
git rm -r --cached node_modules
git rm --cached package.json package-lock.json
git commit -m "Remove accidentally committed node_modules and stray root files"

Add a .gitignore at the repo root (not just inside the nested folder):

node_modules
dist
dist-ssr
.env
.DS_Store

Flatten the nested folder so your project isn't buried in my-portfolio/my-portfolio/. From the repo root:

bash
shopt -s dotglob
git mv my-portfolio/* .
shopt -u dotglob
rmdir my-portfolio
git status   # sanity check everything moved correctly
git commit -m "Flatten project structure"

Delete the stray text file:

bash
git rm "New Text Document.txt"
git commit -m "Remove stray file"

Push all of this, and your repo will look dramatically more professional to anyone browsing it.

2. Rewrite README.md

Replace the default Vite boilerplate with something like:

markdown
# Clarence Felicilda — Portfolio

My personal portfolio site built with React + Vite, showcasing full-stack projects.

🔗 Live site: https://kurarenzu007.github.io/my-portfolio/

## Tech Stack
React, Vite, CSS

## Run locally
git clone https://github.com/kurarenzu007/my-portfolio.git
cd my-portfolio
npm install
npm run dev

Add a screenshot of the site near the top if you can — GitHub renders images inline in README files.

3. Fix metadata in index.html

Replace this:

html
<title>my-portfolio</title>

With:

html
<title>Clarence Felicilda — Full-Stack Developer</title>
<meta name="description" content="Portfolio of Clarence Felicilda, a full-stack developer specializing in React, Node.js, and MySQL." />
<meta property="og:title" content="Clarence Felicilda — Full-Stack Developer" />
<meta property="og:description" content="Full-stack web developer building React, Node.js, and MySQL applications." />
<meta property="og:image" content="https://kurarenzu007.github.io/my-portfolio/preview.png" />
<meta property="og:url" content="https://kurarenzu007.github.io/my-portfolio/" />
<meta property="og:type" content="website" />

For og:image, take a screenshot of your hero section, save it as preview.png in your public/ folder, and reference it like above — that's what shows up when you paste the link elsewhere.

4. Add a real favicon

Quickest path: use favicon.io to generate one from your initials or a simple icon, drop the resulting file into public/, then update index.html:

html
<link rel="icon" type="image/png" href="/favicon.png" />
5. Compress your profile photo

Go to squoosh.app, drop in clarence_f.jpg, export as WebP or optimized JPG at ~80% quality. Should shrink from 238KB to well under 50KB with no visible difference at the size it's displayed.

6. Persist the theme toggle

In Portfolio.jsx, change your isDark state to read from and write to localStorage:

jsx
const [isDark, setIsDark] = useState(() => {
  const saved = localStorage.getItem('theme');
  if (saved) return saved === 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
});

useEffect(() => {
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}, [isDark]);

This defaults to the visitor's system preference on first visit, then remembers their choice.

7. Add project screenshots

For the two projects without live links, take a screenshot of the running app (or a key screen), save it to src/assets/, and add an image field to each project object — then render it at the top of the project card instead of just the colored accent bar. Even a static screenshot is more convincing than a text description alone.

8. Fix the small content stuff
Change '3+' to '4' in the about-stats array in Portfolio.jsx, or just change the label so it's not right next to 4 visible project cards.
Open https://tjcsims.com in an incognito window to confirm it loads for someone outside your network.
9. Split Portfolio.jsx into components (optional, bigger effort)

Create a src/components/ folder and pull out Navbar.jsx, Hero.jsx, About.jsx, Skills.jsx, Projects.jsx, Contact.jsx, each importing from Portfolio.jsx's current JSX. This mainly matters if someone technical will read your code — not urgent for the live site itself.

10. Check color contrast

Use the WebAIM Contrast Checker and test 
#94a3b8 and 
#64748b against your light-mode background (
#f8fafc–
#dbeafe gradient). If either fails AA at the font sizes you're using, darken them slightly (e.g., 
#64748b → 
#475569).

11. Updating Your Description

Remove the Student Tag: Drop phrases like "4th-year BSIT student" from your hero section so you immediately present yourself as a deploy-ready developer.

Adopt a Professional Headline: Frame your introduction around your core engineering stack and capabilities:

"Full-Stack Software Developer | BSIT Graduate specializing in React, Node.js, and Relational Database Architecture."

Highlight Your Workflow: Add a brief line emphasizing your focus on clean system architecture, relational database design (PostgreSQL/Supabase), and efficient production workflows.

High-Impact Portfolio Recommendations

Elevate Project Case Studies: Don't just list technologies for your Student Clearance System, jjj-apartment, and Auto Parts thesis. Write mini-breakdowns detailing your multi-role database schemas, API routing, and live production deployments on Vercel.

Reposition Your OJT Experience: For your 486-hour OJT at STI College, push software testing, system troubleshooting, and network configurations to the top of the list so it directly supports your developer narrative.

Lock in the Polish: Make sure your compressed WebP avatar, custom initials favicon, persisted dark mode toggle, and proper SEO metadata in index.html are fully pushed to your live GitHub Pages link so the site runs flawlessly.