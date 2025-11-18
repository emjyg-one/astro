// @ts-check
import { defineConfig } from 'astro/config';
import { storyblok } from '@storyblok/astro';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site:"https://emjyg.netlify.app/",
  integrations: [preact()]
});