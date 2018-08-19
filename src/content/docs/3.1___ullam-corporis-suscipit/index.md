---
title: Minimal starter
shortTitle: Minimal
categories: ['first']
---

The **Minimal** starter is the simplest one in the set. Nothing fancy, just a bunch of React components plus a couple of Gatsby plugins.

![gatsby-starter-kit-minimal](./gatsby-starter-kit-minimal.png)

<a class="demoLink" target="_blank"  href="https://gatsby-starter-kit-minimal.netlify.com">Live demo</a>

## Features

- A bunch of ready to use structural no-style **React components**.
- Markdown **parts** files for editing content without touching Components' code.
- Central **config** object.
- Easy editable **menu**.
- Feather **icons**.

## Gatsby plugins

- gatsby-plugin-catch-links
- gatsby-plugin-resolve-src
- gatsby-source-filesystem
- gatsby-transformer-remark

## Add-ons

- react-feather

## Folder structure

```
root
  └── src
      ├── content
      │   ├── meta
      │   │   ├── config.js
      │   │   └── menu.js
      │   └── parts
      │       ├── copyright.md
      │       ├── footerLinks.md
      │       ├── notFound.md
      │       └── welcome.md
      ├── pages
      │   ├── 404.js
      │   └── index.js
      └── starter
          ├── Article.js
          ├── Bodytext.js
          ├── Branding.js
          ├── Footer.js
          ├── Header.js
          ├── Heading.js
          ├── Layout.js
          ├── MainMenu.js
          └── MainMenuItem.js
```

## Installation

**Default usage**

```shell
gatsby new [NEW_DIRECTORY_FOR_YOUR_SITE] https://github.com/greglobinski/gatsby-starter-kit.git#minimal-with-content
...
cd [NEW_DIRECTORY_FOR_YOUR_SITE]
...
gatsby develop
```

**Advanced usage**

Fork the [repository](https://github.com/greglobinski/gatsby-starter-kit).

```shell
git clone https://github.com/[your-github-name]/gatsby-starter-kit.git [NEW_DIRECTORY_FOR_YOUR_SITE]
...
cd [NEW_DIRECTORY_FOR_YOUR_SITE]
...
git checkout --track origin/minimal-with-content
...
git checkout -b my-minimal
...
yarn install
...
gatsby develop
```
