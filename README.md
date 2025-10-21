# Personal Portfolio Website

A modern, responsive personal portfolio website built with markdown, vanilla HTML, CSS, and JavaScript. Designed to showcase professional experience, projects, and technical expertise with a focus on performance, accessibility, and user experience.

Visit the [live website](https://yasharmansouri.github.io) to see the project in action.

- [Personal Portfolio Website](#personal-portfolio-website)
  - [Technical Implementation](#technical-implementation)
    - [How It Works](#how-it-works)
    - [Why](#why)
    - [File Structure](#file-structure)
  - [Design Philosophy](#design-philosophy)
    - [Visual Design](#visual-design)
  - [License](#license)

## Technical Implementation

### How It Works

- Separate private repository contains source content and build scripts.
  - Resume in markdown (`resume/resume.md`)
  - Blog posts in markdown (`blogs/*.md`)
  - Configuration in YAML (`config.yaml`)
  - Build script in Python (`build.py`)
- `python build.py` reads these files, generates resume pdf, processes them through Jinja2 templates, and outputs static HTML/CSS/JS.

### Why

- **Content as code**: Resume and blog posts live in version control
- **Single source of truth**: Update resume.md once or write blogs as .md files and it gets updated everywhere.
- **Portable**: Content is just markdown, can be reused anywhere

### File Structure

```txt
├── index.html             # Homepage with typewriter hero section
├── portfolio.html         # Project showcase
├── resume.html            # Professional experience
├── blogs.html             # Blog listings
├── contact.html           # Contact form and information
├── 404.html               # Custom error page
├── /styles
│   ├── themes.css         # CSS custom properties & design tokens
│   ├── main.css           # Core styles & typography
│   ├── glassmorphism.css  # Modern card design system
│   └── components.css     # Reusable UI components
├── /scripts
│   ├── typewriter.js      # Animated greeting
│   ├── theme-toggle.js    # Dark/light mode system
│   └── navigation.js      # Responsive navigation
└── /assets
    └── images/            # Optimized images and icons
```

## Design Philosophy

### Visual Design

The website uses a **minimal outlined card design** system:
- Clean, professional aesthetic
- Transparent cards with subtle borders
- Hover effects that provide feedback without distraction
- Monochromatic color scheme with strategic accent colors
- Dynamic dark/light mode
- Typewriter Animation

## License

All rights reserved. © Analytics One / Yashar Mansouri. Built with 🐼 ❤️ using vanilla technologies.
