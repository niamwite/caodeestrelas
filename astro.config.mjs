import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const isCI = process.env.CI === 'true';
const deployBase = process.env.DEPLOY_BASE || '/';

export default defineConfig({
  site: isCI ? process.env.SITE_URL : 'https://www.caodeestrelas.com.br',
  base: deployBase,
  integrations: [sitemap()],
});
