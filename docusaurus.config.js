// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const links = [
  { to: '/getting-started', label: 'Getting Started', position: 'left' },
  { to: '/resources', label: 'Resources', position: 'left' },
  { to: '/blog', label: 'Blog', position: 'left' },
  { to: '/ecosystem', label: 'Ecosystem', position: 'left' },
  { to: '/community', label: 'Community', position: 'left' },
  { to: '/docs', label: 'Docs', position: 'left' },
]

const linksSocial = [
  { href: 'https://fosstodon.org/@openlineage', label: 'Mastodon', rel: 'me' },
  { href: 'https://twitter.com/OpenLineage', label: 'Twitter' },
  { href: 'https://www.linkedin.com/groups/13927795/', label: 'LinkedIn'},
  { href: 'http://bit.ly/OpenLineageSlack', label: 'Slack' },
  { href: 'https://github.com/OpenLineage/OpenLineage', label: 'GitHub' }
]

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OpenLineage',
  tagline: 'OpenLineage',
  url: 'https://openlineage.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  customFields: {
    links: links,
    linksSocial: linksSocial
  },

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
          blogSidebarCount: 0,
          blogSidebarTitle: 'All our posts',
          feedOptions: {
            type: ['json'],
            copyright: `Copyright © ${new Date().getFullYear()} The Linux Foundation®. All rights reserved.`,
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
          alt: 'OpenLineage',
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
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },  
      // announcementBar: {
      //   id: 'survey_alert',
      //   content: 'Help chart the course of OpenLineage! The 2023 Ecosystem Survey is live and accepting responses. <a href="https://forms.gle/cPk3skNgnB4iab9H6">Submit yours today</a>.',
      //   backgroundColor: '#f26522',
      //   textColor: '#091E42',
      //   isCloseable: false,
      // },
      announcementBar: {
        id: 'survey_alert',
        content: 'Meetup alert: join us at <a href="https://airflowsummit.org/">Airflow Summit</a> on September 18. Learn more and sign up <a href="https://www.meetup.com/openlineage/events/295488014/?utm_medium=referral&utm_campaign=share-btn_savedevents_share_modal&utm_source=link">here</a>.',
        backgroundColor: '#03fc5e',
        textColor: '#091E42',
        isCloseable: false,
      }
    }),

  scripts:
    [{
      src: 'https://plausible.io/js/script.js',
      defer: true,
      'data-domain': 'openlineage.io',
    }],
};

module.exports = config;
