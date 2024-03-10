import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";

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
  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;
