// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import vercelServerless from '@astrojs/vercel/serverless';


export default defineConfig({

  base: '/',
  integrations: [tailwind(), mdx()],
  output: 'hybrid',
  adapter: vercelServerless(),
});