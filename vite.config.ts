import autoprefixer from 'autoprefixer';
import { defineConfig } from 'vite';

export default defineConfig({
  esbuild: {
    jsxInject: `import {h as $$h, Fragment as $$F} from 'voby';\n`,
    jsxFactory: '$$h',
    jsxFragment: '$$F',
  },
  css: {
    postcss: { plugins: [autoprefixer] },
  },
});
