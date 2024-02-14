/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
  content: ['./**/*.{md}', './node_modules/@daisy-vue/core/src/**/*.{vue,ts}'],
  theme: {
    extend: {}
  },
  plugins: [daisyui]
}
