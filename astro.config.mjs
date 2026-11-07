// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// İçerik dosyalarındaki <!-- TODO(...) --> notları yalnız kaynakta kalsın; yayınlanan HTML'den silinir.
const stripTodoComments = {
  name: 'strip-todo-comments',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      const walk = async (d) => {
        for (const e of await readdir(d, { withFileTypes: true })) {
          const p = join(d, e.name);
          if (e.isDirectory()) await walk(p);
          else if (e.name.endsWith('.html')) {
            const html = await readFile(p, 'utf8');
            const out = html.replace(/<!--\s*TODO[\s\S]*?-->\s*/g, '');
            if (out !== html) await writeFile(p, out);
          }
        }
      };
      await walk(fileURLToPath(dir));
    },
  },
};

export default defineConfig({
  site: 'https://eminakkaya.dev',
  output: 'static',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  integrations: [
    stripTodoComments,
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
