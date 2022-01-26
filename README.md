# App Finder V2 - Typescript

# Description

This repository stores all of the App Finder Rules and UI components used across all application.

## Getting Started

After cloning the repository, `cd` into the root directory and run:

```shell
# Install npm packages
yarn install

# Run webpack build script
yarn build

#Run on local  machine
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

# Usage

The following commands are available

```shell
# Runs any tests written for your components
yarn test

# Updatte test
yarn test -u
```

# Principles

Any UI component within this repository must follow these core priciples

- Code syntax - Typescript
- Each components must be a functional components, application takes advantage of React Hooks
- Each component must have total code coverage
- Any component's changes made may affect test snapshots, please update your test with `yarn test -u` if snapshot fails.

# Before commit

## Code checking

The following commands are available

```shell
yarn lint
yarn format - will format your
yarn run lint -- --fix
```

# Global state

## Redux toolkit

[next-redux-wrapper][https://github.com/kirill-konshin/next-redux-wrapper/tree/master/packages/demo-redux-toolkit]
[next-typescript-redux-template](https://github.com/felipemeriga/next-typescript-redux-template)
[RTK with Typescript](https://redux-toolkit.js.org/usage/usage-with-typescript)
