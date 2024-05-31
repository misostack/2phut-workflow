# 2phut workflow

## Development

## Testing

## Code structure

> Add alias in

```sh
npm add -D @types/node
```

> tsconfig.json

```json
    // all paths defined here must match the configured path in `vite.config.ts`
    "paths": {
      "@app/*": ["./src/*"]
    }

```

> vite.config.ts

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3024,
  },
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "./src"),
    },
  },
});
```

1. public

- Unprocessed Assets: robots.txt, favicon
- Direct Access File URL: yourdomain/policy.pdf

2. src/styles

- Contain styles of the project

```sh
npm install -D tailwindcss
npx tailwindcss init
npm install -D @tailwindcss/forms
npm i postcss autoprefixer -D
npm add -D sass
```

3. src/assets

- Assets you wanna process through built workflow
- Versioning and caching
- Usage in component

4. src/configs

- Place to declare env variables, constants

5. src/helpers

- Contains utilities function, should be pure functions

6. src/components

- Contains collections UI components like button, card, modal, input, etc…,

7. src/layouts

- The layouts folder contains dynamic layout that you want display based on your client’s information: sidebar, navbar, ... Example: AuthLayout, DashboardLayout

8. src/pages

- indicate the pages of the application

9. src/routes

- indicate the route of the application

10. src/types

- contains interfaces, types that you use to define on components

11. src/services

- Contains all your code for interface with any external API

12. src/stores

- Contains your global store code ( global state and actions )

## Features

### Workflow

```sh
npm install reactflow
```

## References

1. [Tailwindcss](https://tailwindcss.com/)
2. [Tailwindformcss](https://github.com/tailwindlabs/tailwindcss-forms)
3. [React WorkFlow](https://reactflow.dev/learn/concepts/plugin-components)
