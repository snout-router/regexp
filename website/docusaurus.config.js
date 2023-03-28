const { createConfig } = require("@snout/docusaurus-config");

module.exports = createConfig({
  rootPath: __dirname,
  title: "Snout RegExp Utilities",
  navbarItems: [
    {
      to: "api",
      label: "API",
      position: "right",
    },
  ],
  footerLinks: [
    {
      title: "Docs",
      items: [
        {
          label: "API reference",
          to: "api",
        },
      ],
    },
  ],
});
