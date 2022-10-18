# XRate - React Currency Converter

Create a simple currency conversion app per following rules:

- source currency and amount as well as target currency and amount are editable in real time
- small number of currencies (~4)
- use static dummy data for conversion rates, conversion accuracy is not a priority
- use React
- use state management solution of your choice
- focus on optimal application state shape
- write readable and maintainable code
- add some minimal styling to make the UI concise, not necessarily beautiful

This repo is based off of [react-ts-template](https://github.com/mstieranka/react-ts-template).

## How to run

First, ensure that you have `node.js v16.x` and `pnpm 7.x` installed:

```bash
node -v
pnpm -v || npm install -g pnpm
```

Then install packages with `pnpm install`.

After that, you can run `pnpm start` to get a hot-reloading preview or `pnpm run build` to build the app into `dist/`.

## Extra notes

This app supports both dark and light theme based on browser theme (using `prefers-color-scheme: dark`). Also try swapping the currencies :)
