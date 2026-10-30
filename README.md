# Tailwind and BootStrap Project

Create a React project utilizing all the tools you've learned so far. This project must contain (but is not limited to) the following:
  
- Vite + React.js Project

- Use of useEffect and useState

- Use of Axios and at least 1 3rd Party API

- Use of Components and Props

- Use of Tailwind CSS for styling html components

- Use of ReactBootstrap Components

- Have fun and challenge yourself!

## Setup

Scaffold the app (Node 22 or 24) and install Tailwind, React Bootstrap and Axios:

```sh
npm create vite@latest my-project -- --template react
cd my-project
npm install
npm install tailwindcss @tailwindcss/vite react-bootstrap bootstrap axios
```

Add the Tailwind plugin to `vite.config.js`:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

Replace everything in `src/index.css` with:

```css
@import "tailwindcss" important;
```

The `important` matters: without it, Bootstrap's CSS overrides your Tailwind classes (for example `text-blue-600` or `px-6` on a Bootstrap `Button`) no matter which file you import first.

In `src/main.jsx`, import Bootstrap's CSS above `./index.css`:

```js
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
```

Then run `npm run dev`. Tailwind v4 needs no `tailwind.config.js` and no `npx tailwindcss init`.
