# Getting Started

Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.

It's fast, flexible, and reliable — with zero-runtime.

Installing Tailwind CSS as a PostCSS plugin is the most seamless way to integrate it with build tools like webpack and Parcel.

## Installation

```markdown
npm install
```

## Start your build process

```bash
npm run build
# or
yarn build
```

# "serve": "concurrently \"postcss src/css/tailwind.css -o src/dist/main.min.css --minify\"  \"live-server ./src\"",

# "build": "postcss src/css/tailwind.css -o src/dist/main.min.css --minify",

## Start your live server with hot reload

```bash
npm run serve
# or
yarn serve
```
