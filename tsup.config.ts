import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  outDir: 'dist',
  clean: false,      // webpack runs after and adds dist/bundle.js — don't wipe it
  sourcemap: true,
  splitting: false,
  treeshake: true,
})
