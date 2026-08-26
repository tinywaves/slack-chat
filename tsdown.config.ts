import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['src/index.ts', 'src/cli.ts'],
  outDir: 'dist',
  shims: true,
  format: ['esm'],
  clean: true,
  dts: true,
  minify: true,
  target: false,
});
