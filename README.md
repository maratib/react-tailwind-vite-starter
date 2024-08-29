# React + TypeScript + TailwindCSS + Vite

## Setup

```bash
# Create new React App with Vite
yarn create vite

# Add tailwindCSS to newly created app
yarn add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## Paste the following into tailwind.config.js

```javascript
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
```

## Move the index.css to ./assets folder and paste the following to index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

# Remove
