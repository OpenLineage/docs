// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const links = [
  { to: '/docs/getting-started/', label: 'Getting Started', position: 'left' },
  { to: 'integration', label: 'Integration', position: 'left' },
  { to: '/resources', label: 'Resources', position: 'left' },
  { to: '/blog', label: 'Blog', position: 'left' },
  { to: '/ecosystem', label: 'Ecosystem', position: 'left' },
  { to: '/docs', label: 'Docs', position: 'left' },
]

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OpenLineage Docs',
  tagline: 'OpenLineage Docs',
  url: 'https://docs.openlineage.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'openlineage', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/OpenLineage/docs/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        blog: {
          blogTitle: 'Blog',
          blogDescription: 'Data lineage is the foundation for a new generation of powerful, context-aware data tools and best practices. OpenLineage enables consistent collection of lineage metadata, creating a deeper understanding of how data is produced and used.',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All our posts',
          feedOptions: {
            type: ['json'],
            copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc.`,
          },
        },
        pages: {
          path: 'src/pages',
          include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
          exclude: [
            'home.tsx', // this page served from plugin
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],
          mdxPageComponent: '@theme/MDXPage',
        },
      }),
    ],
  ],

  plugins: [
    function tailwindcssPlugin(ctx, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
    [
      // Use custom home page with blog plugin
      "./plugins/home-blog-plugin",
      {
        id: "blogs",
        routeBasePath: "/",
        path: "./blogs"
      },
    ],
    require.resolve('docusaurus-lunr-search')
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'OpenLineage Docs',
          src: 'img/ol-logo.svg',
        },
        items: [
          ...links,
          {
            href: 'https://github.com/OpenLineage/openlineage',
            label: 'GitHub',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'light',
        copyright: `Copyright © ${new Date().getFullYear()} Linux Foundation.`,
        logo: {
          alt: 'OpenLineage Docs',
          src: 'img/ol-logo.svg',
          width: 160,
        },
        links: [
          ...links,
          { href: 'https://fosstodon.org/@openlineage', label: 'Mastodon' },
          { href: 'https://twitter.com/OpenLineage', label: 'Twitter' },
          { href: 'http://bit.ly/OpenLineageSlack', label: 'Slack' },
          { href: 'https://github.com/OpenLineage/OpenLineage', label: 'GitHub' }
        ]
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
