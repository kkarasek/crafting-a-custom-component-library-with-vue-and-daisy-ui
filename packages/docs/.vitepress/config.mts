import { defineConfig } from 'vitepress'
import { VueReplMdPlugin } from 'vitepress-plugin-vue-repl'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'DaisyVue',
  description: 'A Vue Component Library based on the Daisy UI CSS Library',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components' },
      { text: 'Stories', link: 'http://localhost:6006' }
    ],

    sidebar: [
      {
        text: 'Docs',
        items: [
          { text: 'Install (Recommended)', link: '/install-recommended' },
          { text: 'Install (Global Components)', link: '/install-global-components' },
          { text: 'Install (Nuxt)', link: '/install-nuxt' },
          { text: 'Colors', link: '/colors' },
          { text: 'Themes', link: '/themes' }
        ]
      },
      {
        text: 'Components',

        // leave trailing comma for hygen
        // prettier-ignore
        items: [
          { text: 'Alert', link: '/components/alert' },
          { text: 'Rating', link: '/components/rating' },
          { text: 'Slider', link: '/components/slider' },
          { text: 'Tooltip', link: '/components/tooltip' },
          { text: 'NavBar', link: '/components/navbar' },
          { text: 'TestChangeset', link: '/components/testchangeset' },
          // do not remove - used by hygen
        ]
      }
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }]
  },
  markdown: {
    config: (md) => {
      md.use(VueReplMdPlugin)
    }
  }
})
