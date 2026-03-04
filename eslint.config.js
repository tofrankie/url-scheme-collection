import { defineConfig } from '@tofrankie/eslint'

export default defineConfig({
  ignores: ['dist', 'node_modules', '**/*.md'],
  react: true,
  typescript: true,
})
