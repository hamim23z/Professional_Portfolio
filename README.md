# Hamim Choudhury - Portfolio Website

### Project Recap
My personal portfolio showcasing my work experience, projects, and tech stack. It's a single-page site with a dark, terminal-inspired design, built with Next.js and React and styled with plain CSS modules. You can check it out [here](https://hamimchou.vercel.app/)!

<br>

```
**Tools, Languages, and Libraries Used**
- Node.js and Next.js
- JavaScript
- React
- CSS Modules
- React Icons
- Visual Studio Code
- Vercel
- Git
```

### Getting Started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

### Updating Content

All of the site's content lives in `app/data/`, so you never need to touch the components to add something:

| File | What it controls |
| --- | --- |
| `profile.js` | Name, intro text, email, and social/resume links |
| `experience.js` | Work experience timeline (newest first) |
| `projects.js` | Projects grid, including category and status filters |
| `stack.js` | Tech stack groups and icons |

To add a project, copy an entry in `projects.js`, set its `category` (`ml`, `web`, `data`, or `tools`) and `status` (`completed`, `current`, or `paused`), and drop its image in `public/`.
