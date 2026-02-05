import { defineConfig } from 'tsup';

export default defineConfig([
  // Config ESM
  {
    entry: ['src/index.ts'],
    format: ['esm'],
    dts: true,
    splitting: false,
    sourcemap: true,
    clean: true,
    treeshake: true,
    platform: 'node',
    target: 'node16',
  },

  // Config CommonJS
  {
    entry: ['src/cjs.cts'],
    format: ['cjs'],
    dts: false,
    splitting: false,
    sourcemap: true,
    treeshake: true,
    platform: 'node',
    target: 'node16',
    outDir: 'dist/cjs',
  },
]);
