// ./docs/.vitepress/config.js

module.exports = {
    base: '/tw-border-palette-default/',
    title: '@obewds/tw-border-palette-default',
    description: 'A documentation site for the TwBorderPaletteDefault component',
    markdown: {
      lineNumbers: true,
    },
    themeConfig: {
        nav: [
            { text: "Home", link: "/" },
            { text: "Component", link: "/component" },
            { text: "Tests", link: "/tests" },
            { text: "npm", link: "https://www.npmjs.com/package/@obewds/tw-border-palette-default" },
            { text: "GitHub", link: "https://github.com/obewds/tw-border-palette-default" },
        ],
        // sidebar: [
            // { text: "Installation", link: "/#installation" },
        // ],
    },
}
