# React TypeScript Template

This is a simple template, set up with the following libraries:

- pnpm
- React
- TypeScript
- TailwindCSS (can be removed by removing `postcss`, `autoprefixer` and `tailwindcss`)
- Material Design Icons (can be removed by removing `@mdi/js` and `@mdi/react`)
- ESLint and Prettier

## How to run

First, ensure that you have `node.js v16.x` and `pnpm 7.x` installed:

```bash
node -v
pnpm -v

# when running node 16.17+, you can install pnpm with the following:
corepack enable
corepack prepare pnpm@latest --activate
```

Then install packages with `pnpm install`.

After that, you can run `pnpm start` to get a hot-reloading preview or `pnpm run build` to build the app into `dist/`.
