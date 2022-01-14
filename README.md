# duckydook ui-kit (Vue.js 3)

Design System used in our micro frontends.

## Development

Install the project dependencies.

```bash
yarn install
```

Start a development server running on `http://localhost:6006`, that comes with Hot-Module-Replacement (HMR) working out of the box.

```bash
yarn serve
```

Produce a production-ready bundle in the `dist/` directory, with minification for JS/CSS/HTML and auto vendor chunk splitting for better caching.

```bash
yarn build:package
```

Create a static storybook.

```bash
yarn build:storybook
```

Lint and fix the files.

```bash
yarn lint
```

### Points to remember

- Supported browsers:

  - Chrome
  - Firefox

- Supported screen sizes:
  ```js
  'lg':  {'min': '1025px', 'max': '1280px'},
  'xl':  {'min': '1281px', 'max': '1600px'},
  '2xl': {'min': '1601px'}
  ```

### Links

- **[Library](https://www.figma.com/!!!)**


