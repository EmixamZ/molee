import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site:'https://emixamz.github.io',
  base:'/molee',
  integrations: [tailwind()]
});