import { sveltePreprocess } from 'svelte-preprocess';
import adapter from "@sveltejs/adapter-static";

import json from './src/psalms.json' with { type: 'json' };

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'app/index.html',
      precompress: false,
      strict: true
    }),
    paths: {
      base:  dev ? '' : process.env.BASE_PATH,
    },
    prerender: {
      crawl: true,
      entries: [
          '/',
          '/quest',
          '/locations',
          ...json.psalms_media.map(psalm => `/readings/${psalm.psalm}`)
      ]
    },
  },

  preprocess: [
    sveltePreprocess({
      postcss: true,
    }),
  ],
};

export default config;
