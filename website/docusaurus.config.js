const {createConfig} = require('@snout/docusaurus-config')

module.exports = createConfig({
  rootPath: __dirname,
  title: 'Snout RegExp Utilities',
  redirects: [
    {
      from: '/api',
      to: '/api/escape',
    },
  ],
  navbarItems: [
    {
      to: 'api/escape',
      label: 'API',
      position: 'right',
    },
  ],
  footerLinks: [
    {
      title: 'Docs',
      items: [
        {
          label: 'API reference',
          to: 'api/escape',
        },
      ],
    },
  ],
})
