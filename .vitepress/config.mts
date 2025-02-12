import { defineConfig } from 'vitepress';
import { BiDirectionalLinks } from '@nolebase/markdown-it-bi-directional-links';
import { calculateSidebar } from '@nolebase/vitepress-plugin-sidebar'

// https://vitepress.dev/reference/site-config

export default defineConfig({
  base: '/',
  title: "Solerverso",
  description: "Hello",
ignoreDeadLinks: true,
  themeConfig: {
    docFooter: {
      next: false,
      prev: false,
    },
  appearance: 'dark',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Biblioteca', link: '/biblioteca' },
      { text: 'Teste', link: '/markdown-examples' }
    ],


    sidebar: calculateSidebar([ 
      'sobre', 
      'literatura',
    ]),


    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
markdown: {
    config: (md) => {
      md.use(BiDirectionalLinks()) 
    },
  },
})
