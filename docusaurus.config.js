// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Komiser Documentation',
  tagline: 'The Future of DevOps',
  url: 'https://www.oraculi.io/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'helloOraculi', // Usually your GitHub org/user name.
  projectName: 'oraculi', // Usually your repo name.

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
            'https://github.com/HelloOraculi/oraculi',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: '',
        logo: {
          alt: 'My Site Logo',
          src: 'img/light-mode-logo.png',
          srcDark: 'img/1.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/mlabouardy/komiser',
            className: 'pseudo-icon github-icon',
            position: 'right',
          },
          {
            href: 'https://discord.oraculi.io',
            className: 'pseudo-icon discord-icon',
            position: 'right',
          },
          {
            type: 'search',
            position: 'right',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            label: 'Sign Up',
            href: 'https://cloud.oraculi.io/signup',
            position: 'right',
            className: 'dev-portal-signup dev-portal-link',
          },
          {
            label: 'Login',
            href: 'https://cloud.oraculi.io/login',
            position: 'right',
            className: 'dev-portal-login dev-portal-link',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs',
              },
              {
                label: 'Contribute',
                to: '/docs',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.oraculi.io',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/HelloOraculi',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/mlabouardy/komiser',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        darkTheme: darkCodeTheme
      },
    }),
};
module.exports = config;