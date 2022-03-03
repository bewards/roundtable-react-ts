# Basics Overview
- TypeScript allows you to gradually adapt its usage in your existing projects
- Early benefits includ:
    - intellisense of most installed packages
    - automatic strict checking of types
    - auto-complete
    - reduces bugs and headaches of post compilation
- Easy to find support and answers due to it being widely encouraged

# Migrating from Javascript

## From Scratch w/ React
- CRA? Use the typescript template: `npx create-react-app my-react-app --template typescript`
    - see below "existing react app" for what additional is installed

- React + webpack?
    - `npm install webpack webpack-cli ts-loader --save-dev`
    - `npm install react react-dom @types/react @types/react-dom --save-dev`
    - create `webpack.config.js`

## Existing React App

### install TS npm packages
- `npm install typescript @types/node @types/react @types/react-dom @types/jest --save-dev`
- @types is a central repository of packages dedicated to typings for libraries that don't have type files directly in it's own package
    - if you're not automatically receiving types after an import, check out the types search, https://www.typescriptlang.org/dt/search, to see where the types exist.

### Set up a TS Config File
- create configuration file `tsconfig.json` (or copy from the react typescript template above)
- review `tsconfig.json` comments

### Rename JS Files
- rename React component files to `.tsx`
- rename normal JavaScript files to `.ts`

## Existing JS App

### install TS npm packages
- rollup?
    - `npm install @rollup/plugin-typescript typescript --save-dev`
    - linting? `npm install @typescript-eslint/eslint-plugin @typescript-eslint/parser`
    - babel? `npm install @babel/core @rollup/plugin-babel @babel/plugin-external-helpers @babel/plugin-transform-runtime @babel/eslint-parser @babel/register @rollup/plugin-commonjs @rollup/plugin-node-resolve --save-dev`
    - create rollup.config OR gulp.babel.js
- webpack?
    - `npm install webpack webpack-cli webpack-dev-server @types/webpack-dev-server --save-dev`
    - babel? `npm install babel-loader --save-dev` (to allow Babel to transpile the TypeScript code into JavaScript)
    - type checking during bundling? `npm install fork-ts-checker-webpack-plugin @types/fork-ts-checker-webpack-plugin --save-dev`
    - create webpack.config: https://learntypescript.dev/12/l4-webpack

## Run CRA
- Why didn't the build catch the error?
    - JS to TSX: inspect Loader.js

## Review JS Files

### Rename JS Files: Basics.js
- review in file

### Review Global Namespace Module + Type Extensions
- You can declare global variables / functions in the global scope by using `declare global { ... }` syntax to access `window.property` / `property`
    - useful for libraries that expose global variables OR creating *extension methods* (prototype methods)
- review /typings/globals.d.ts
- review /extensions/dom.extensions.ts
- enable images.d.ts.disabled

### Rename JS Files: Loader.tsx
- review Error: Importing images in TypeScript React - "Cannot find module"
    - create a `./src/typings` directory for all custom [Type Declarations](https://www.typescriptlang.org/docs/handbook/2/type-declarations.html) in order to fix this error

### Rename JS Files: Photos.tsx
- review error in terminal/web: *Property 'x' does not exist on type 'never'*
    - create interface or type "response model"


## Troubleshooting
- errors not appearing in vscode until file is opened: set `enableProjectDiagnostics` to true in UI Workspace settings (experimental)