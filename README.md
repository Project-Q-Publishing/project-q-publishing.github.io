# Project Q Publishing

Professional technical book publishing website built with Jekyll and hosted on GitHub Pages.

**Live Site**: [www.projectqpub.com](https://www.projectqpub.com)

## Table of Contents

- [Overview](#overview)
- [Setup & Installation](#setup--installation)
- [Development Workflow](#development-workflow)
- [Adding Books to the Catalog](#adding-books-to-the-catalog)
- [Featured Books System](#featured-books-system)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Contributing](#contributing)

## Overview

Project Q Publishing specializes in high-quality technical books for developers, engineers, and technology professionals. This Jekyll-based static site provides:

- **Book Catalog**: Showcase technical books with detailed metadata
- **Manuscript Submissions**: Accept proposals from experienced authors
- **Responsive Design**: Mobile-first, accessible interface
- **SEO Optimized**: Structured data, sitemaps, and meta tags

## Setup & Installation

### Prerequisites

- **Ruby** 2.7 or higher
- **Bundler** 2.0 or higher
- **Git** for version control

### Installation Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Project-Q-Publishing/project-q-publishing.github.io.git
   cd project-q-publishing.github.io
   ```

2. **Install Ruby** (if not already installed):

   **macOS** (using Homebrew):
   ```bash
   brew install ruby
   ```

   **Ubuntu/Debian**:
   ```bash
   sudo apt-get install ruby-full build-essential zlib1g-dev
   ```

   **Windows**: Download from [RubyInstaller](https://rubyinstaller.org/)

3. **Install Bundler**:
   ```bash
   gem install bundler
   ```

4. **Install project dependencies**:
   ```bash
   bundle install
   ```

   This installs:
   - Jekyll (via github-pages gem)
   - Minima theme
   - jekyll-feed (RSS generation)
   - jekyll-seo-tag (SEO optimization)
   - jekyll-sitemap (sitemap generation)

5. **Verify installation**:
   ```bash
   bundle exec jekyll --version
   ```

## Development Workflow

### Running the Site Locally

Start the Jekyll development server:

```bash
bundle exec jekyll serve
```

The site will be available at `http://localhost:4000`

**Options**:
- `--drafts` - Include draft posts
- `--livereload` - Auto-refresh browser on changes
- `--incremental` - Faster rebuilds (only changed files)
- `--port 4001` - Use different port

**Full command with live reload**:
```bash
bundle exec jekyll serve --livereload
```

### Making Changes

1. **Edit files** - Changes to content, layouts, or styles
2. **Preview locally** - Jekyll auto-rebuilds on save
3. **Test thoroughly** - Check responsive design, links, images
4. **Commit changes**:
   ```bash
   git add .
   git commit -m "Description of changes"
   ```
5. **Push to GitHub**:
   ```bash
   git push origin main
   ```

GitHub Pages automatically rebuilds and deploys the site after pushing to `main`.

### Building for Production

To build the site without running the server:

```bash
bundle exec jekyll build
```

Output is generated in `_site/` directory.

## Adding Books to the Catalog

Books are stored as Markdown files in the `_books/` directory. Each book file contains YAML front matter with metadata and optional Markdown content for the book detail page.

### Creating a New Book

1. **Create a new file** in `_books/` directory:
   ```bash
   touch _books/your-book-title.md
   ```

2. **Add YAML front matter** with book metadata (see template below)

3. **Add book description content** in Markdown below the front matter

### Book File Template

```yaml
---
# Required Fields
title: "Your Book Title"
author: "Author Name"

# Author Social Media (optional but recommended)
author_social:
  twitter: "author_handle"
  linkedin: "authorname"
  github: "authorname"
  website: "https://authorname.dev"

isbn: "978-1-234567-89-0"
publication_date: "2025-06-15"
price: 49.99
currency: "USD"
description: >-
  Brief description of the book. This appears in listings and search results.
  Keep it concise but informative (2-3 sentences).

# Optional but Recommended
subtitle: "A Comprehensive Guide to Advanced Topics"
pages: 450
cover_image: "/assets/images/books/your-book-cover.jpg"
difficulty_level: "Intermediate to Advanced"

# Programming Languages (list)
programming_languages:
  - "Python"
  - "JavaScript"
  - "Docker"

# Topics/Keywords (list)
topics:
  - "Web Development"
  - "API Design"
  - "Testing"
  - "Deployment"

# Target Audience
target_audience: "Software Engineers, Backend Developers, DevOps Engineers"

# Purchase Links
purchase_links:
  amazon: "https://amazon.com/dp/example"
  publisher: "/contact"

# Sample Chapters (optional)
sample_chapters:
  - "Chapter 3: Core Concepts"
  - "Chapter 7: Advanced Patterns"

# Reviews (optional)
reviews:
  - quote: "Excellent resource for modern developers"
    author: "Tech Review Magazine"
    rating: 5
  - quote: "Clear, practical, and comprehensive"
    author: "Developer Weekly"
    rating: 5

# Featured on Homepage (default: false)
featured: true
---

## Overview

Detailed description of the book goes here. This appears on the individual book page.

## What You'll Learn

- Key learning point 1
- Key learning point 2
- Key learning point 3

## Table of Contents

1. Chapter 1: Introduction
2. Chapter 2: Core Concepts
3. Chapter 3: Advanced Topics
...

## About the Author

Author biography and credentials.
```

### Required Fields

| Field | Type | Description |
|-------|------|-------------|
| `title` | String | Full book title |
| `author` | String | Author's full name |
| `author_social` | Object | Author's social media profiles (optional but recommended) |
| `isbn` | String | ISBN-13 number |
| `publication_date` | String | Format: YYYY-MM-DD |
| `price` | Number | Price (numeric only) |
| `description` | String | Brief description (2-3 sentences) |

### Optional Fields

| Field | Type | Description |
|-------|------|-------------|
| `subtitle` | String | Book subtitle |
| `currency` | String | USD, EUR, or GBP (default: USD) |
| `pages` | Number | Total page count |
| `cover_image` | String | Path to cover image |
| `difficulty_level` | String | Beginner, Intermediate, Advanced, etc. |
| `programming_languages` | List | Languages covered in book |
| `topics` | List | Key topics/keywords |
| `target_audience` | String | Intended readers |
| `purchase_links` | Object | Links to purchase (amazon, publisher, etc.) |
| `sample_chapters` | List | Available sample chapter titles |
| `reviews` | List | Book reviews with quote, author, rating |
| `featured` | Boolean | Display on homepage (default: false) |

### Adding Book Cover Images

1. **Prepare image**:
   - Recommended size: 600x900px (2:3 aspect ratio)
   - Format: JPG or PNG
   - File size: < 500KB for fast loading

2. **Save to assets**:
   ```bash
   cp cover.jpg assets/images/books/your-book-cover.jpg
   ```

3. **Reference in front matter**:
   ```yaml
   cover_image: "/assets/images/books/your-book-cover.jpg"
   ```

### Book Filtering Integration

The books page includes interactive filtering and sorting. When you add a new book, it automatically integrates with these filters:

**How it works:**
- Filter buttons are generated from `programming_languages` and `topics` arrays in book front matter
- Jekyll's `slugify` filter normalizes values for matching (e.g., "C#" becomes "c")
- JavaScript filters book cards based on selected topics and languages
- Books can be sorted by date, title, or price

**Steps to ensure filter integration:**

1. **Add proper metadata** in your book's front matter:
   ```yaml
   programming_languages:
     - "C#"
     - "SQL"
   topics:
     - "Web Development"
     - "API Design"
   ```

2. **Rebuild the site** to regenerate filter buttons and book cards:
   ```bash
   bundle exec jekyll build
   ```

3. **Test the filters** by running the site locally:
   ```bash
   bundle exec jekyll serve
   ```
   Navigate to `/books` and verify your book appears when selecting its languages/topics.

**Note on special characters:**
- Languages with special characters (e.g., "C#", "C++") are automatically handled
- Jekyll's `slugify` filter removes special characters consistently across filter buttons and book cards
- Both "C#" in the button and "C#" in the book metadata become "c" for matching

## Featured Books System

### How It Works

The `featured` flag controls which books appear on the homepage in the "Featured Books" section.

**Homepage Logic** (index.md:14):
```liquid
{% assign featured_books = site.books | where: 'featured', true | sort: 'publication_date' | reverse %}
```

This filters books where `featured: true`, sorts by publication date (newest first), and displays them in a special grid.

### Setting Featured Books

1. **Mark a book as featured**:
   ```yaml
   ---
   title: "Your Book Title"
   author: "Author Name"
   # ... other fields ...
   featured: true
   ---
   ```

2. **Current featured books**:
   - `docker-kubernetes-production.md`
   - `python-web-apis.md`
   - `golang-microservices-guide.md`

### Behavior

- **If featured books exist**: Displays featured books grid + "View All Books" button
- **If no featured books**: Displays message "Our books are currently in development"
- **Sort order**: Newest publication date first
- **No limit**: All featured books are displayed (consider limiting if many books)

### Best Practices

- **Limit featured books**: Recommend 3-6 books for optimal homepage display
- **Rotate regularly**: Update featured books to showcase new releases
- **Represent variety**: Feature books from different topics/languages
- **New releases**: Set `featured: true` for recent publications

## Project Structure

```
project-q-publishing.github.io/
├── _books/                    # Book collection (Markdown files)
├── _includes/                 # Reusable components (header, footer, nav)
├── _layouts/                  # Page templates (default, book, post, page)
├── _sass/                     # SCSS stylesheets (modular)
├── assets/                    # Static assets
│   ├── css/                  # Compiled CSS
│   ├── images/               # Images
│   │   └── books/           # Book cover images
│   └── main.scss            # Main stylesheet entry point
├── _config.yml               # Jekyll configuration
├── Gemfile                   # Ruby dependencies
├── index.md                  # Homepage
├── about.md                  # About page
├── books.md                  # Books catalog page
├── contact.md                # Contact page
├── submissions.md            # Manuscript submissions page
└── CNAME                     # Custom domain configuration
```

### Key Files

- **_config.yml**: Site-wide configuration, navigation, SEO settings
- **Gemfile**: Ruby gem dependencies
- **_layouts/**: Page templates using Liquid syntax
- **_includes/**: Reusable HTML components
- **_sass/**: Modular SCSS for styling

## Deployment

### GitHub Pages (Automatic)

The site automatically deploys when changes are pushed to the `main` branch:

1. Push changes to GitHub
2. GitHub Pages builds the site using Jekyll
3. Site is deployed to www.projectqpub.com

**Build time**: Typically 1-3 minutes

### Manual Deployment

For other hosting providers, build locally and upload `_site/` directory:

```bash
bundle exec jekyll build
# Upload contents of _site/ to your web host
```

### Custom Domain

The site uses a custom domain configured via `CNAME` file:
```
projectqpub.com
```

DNS settings must point to GitHub Pages:
- `CNAME` record: `www.projectqpub.com` → `project-q-publishing.github.io`

## Contributing

### Development Branch

All development should occur on feature branches:

```bash
git checkout -b feature/your-feature-name
# Make changes
git commit -am "Description"
git push origin feature/your-feature-name
# Create pull request to main
```

### Code Style

- **Markdown**: Use consistent formatting, line breaks at 80-100 chars
- **YAML**: 2-space indentation, quote strings with special chars
- **Liquid**: Use proper whitespace control (e.g., `{%- -%}`)
- **SCSS**: Follow BEM methodology for CSS classes

### Testing Checklist

Before pushing changes:
- [ ] Test locally with `bundle exec jekyll serve`
- [ ] Check all pages load correctly
- [ ] Verify responsive design (mobile, tablet, desktop)
- [ ] Test all links (internal and external)
- [ ] Validate book metadata is complete
- [ ] Check images load properly
- [ ] Review commit messages for clarity

## Troubleshooting

### Common Issues

**Port already in use**:
```bash
bundle exec jekyll serve --port 4001
```

**Changes not reflecting**:
- Clear cache: `bundle exec jekyll clean`
- Restart server: `Ctrl+C` then `bundle exec jekyll serve`

**Bundle install fails**:
```bash
bundle update
bundle install
```

**Images not loading**:
- Check path starts with `/assets/`
- Verify file exists in `assets/images/`
- Clear browser cache

---

© 2025, Project Q Publishing. All Rights Reserved.
