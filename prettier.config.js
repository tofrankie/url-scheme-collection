import { base, html } from '@tofrankie/prettier'

export default {
  ...base,
  overrides: [
    {
      files: ['*.html'],
      options: html,
    },
  ],
}
