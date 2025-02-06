import { defineConfig } from 'tsup';

export default defineConfig([
  // Configuration ESM
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
  // Configuration CommonJS
  {
    entry: ['src/cjs.cts'],
    format: ['cjs'],
    dts: false, // Désactiver la génération de .d.ts pour CJS
    splitting: false,
    sourcemap: true,
    treeshake: true,
    platform: 'node',
    target: 'node16',
    outDir: 'dist/cjs',
  },
]);