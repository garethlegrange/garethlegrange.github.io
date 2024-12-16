---
title: "Using Tailwind CSS 4 with Astro 🎨"
description: "Learn how to set up and use Tailwind CSS 4 in your Astro projects for seamless styling and productivity."
pubDate: "16 Dec 2024"
heroImage: "tailwind.jpg"
---

![Tailwind CSS 4](heroImage)

## Install 🎨

Astro uses Vite under the hood, which allows us to take advantage of the latest Vite plugin for Tailwind CSS. Here’s how to get started:

1. **Install Tailwind CSS and the Vite plugin:**

   Run the following command to install Tailwind CSS and the Vite plugin:

   ```bash
   npm install tailwindcss@next @tailwindcss/vite@next
   ```

2. **Update your Astro configuration:**

   Modify your `astro.config.mjs` file to include the Vite plugin for Tailwind CSS:

   ```javascript
   import { defineConfig } from "astro/config";
   import tailwindcss from "@tailwindcss/vite";

   export default defineConfig({
     vite: {
       plugins: [tailwindcss()],
     },
   });
   ```

3. **Import Tailwind CSS in your project:**

   Lastly, you’ll need to import Tailwind CSS into your global stylesheet. In your CSS file (e.g., `src/styles.css`), add the following import:

   ```css
   @import "tailwindcss";
   ```

Now you can start using Tailwind CSS in your Astro project! Enjoy building beautiful and responsive designs with minimal effort. 🎨
