module.exports = {
  base: "/corpauration-components/",
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Corpauration components',
      description: 'Doc for corpauration-components'
    }
  },
  head: [
      ['link', {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900'}],
      ['link', {rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css'}],
  ],
  themeConfig: {
    repoLabel: 'Github repository',
    repo: 'corpauration/corpauration-components',
    docsDir: 'docs',
    editLinks: true,
    docsBranch: 'master',
    editLinkText: 'Improve this page',
    search: true,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        lastUpdated: 'Last Updated',
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh'
          }
        },
        nav: [
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Components', link: '/components/' },
        ],
        sidebar: {
          '/components/': [
            {
              title: 'Components',
              collapsable: false,
              children: ['test-button']
            }
          ]
        }
      }
    }
  }
}
