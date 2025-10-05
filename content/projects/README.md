# Projects MDX Directory

This directory is for MDX-based project pages that will be rendered at `/projects/[slug]`.

## Usage

### To enable MDX project pages:
1. Add `.mdx` files to this directory with frontmatter:
```mdx
---
title: My Project
publishedAt: 2025-01-15
summary: A brief description
tags: nextjs, react
---

Your project content here...
```

2. The file will be accessible at `/projects/filename` (without the `.mdx` extension)

### To disable MDX project pages:
Simply delete the `app/projects/[slug]` directory. The projects page will continue to work with static projects from `app/projects/project-data.tsx`.

## Important Notes

- With `output: 'export'` in `next.config.js`, you **must** have at least one `.mdx` file in this directory if the `app/projects/[slug]` directory exists
- If you don't plan to use MDX project pages, delete both:
  - `app/projects/[slug]/` directory
  - This `content/projects/` directory (optional)
- The main projects page at `/projects` will display both MDX projects (from this directory) and static projects (from `project-data.tsx`)
