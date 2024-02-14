import daisyui from 'daisyui'
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./node_modules/@daisy-vue/core/src/components/**/*.vue'],
  theme: {
    extend: {}
  },
  plugins: [daisyui]
}