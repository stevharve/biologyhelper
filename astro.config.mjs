import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from '@astrojs/tailwind';
import solidJs from '@astrojs/solid-js';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), solidJs()],
  output: 'static',
});
