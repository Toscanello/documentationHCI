const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'organizoni',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Uputstvo za Klijenta',
        link: '/klijent/',
      },
      {
        text: 'Uputstvo za Organizatora',
        link: '/organizator/',
      },
      {
        text: 'Uputstvo za Administratora',
        link: '/admin/',
      }
    ],
    sidebar: {
      '/klijent/': [
        {
          title: 'Uputstvo za Korisnika',
          collapsable: false,
          children: [
            'prijava',
            'home-page',
            'new-celebration'
          ]
        }
      ],
      '/organizator/': [
        {
          title: 'Uputstvo za Organizatora',
          collapsable: false,
          children: [
            'auth',
            'home-page',
            'event-prikaz',
            'collaborators'
          ]
        }
      ],
      '/admin/': [
        {
          title: 'Uputstvo za Administratora',
          collapsable: false,
          children: [
            'auth',
            'home-page',
            'users',
            'organizers',
            'collaborators',
            'events'
          ]
        }
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
