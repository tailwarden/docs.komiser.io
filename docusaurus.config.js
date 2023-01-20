// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const TwitterSvg = '<svg style="fill: #1DA1F2; vertical-align: middle; margin-left: 3px;" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>';


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Komiser Documentation',
  tagline: 'The Future of DevOps',
  url: 'https://www.tailwarden.com/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/komiser-favicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tailwarden', // Usually your GitHub org/user name.
  projectName: 'komiser', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/tailwarden/komiser',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-PVLRSMWSFG',
          anonymizeIP: true,
        },
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
      },
      announcementBar: {
        id: 'announcementBar-2', // Increment on change
        content: `⭐️ If you like Komiser, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/tailwarden/komiser">GitHub</a> and follow us on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/tailwarden">Twitter ${TwitterSvg}</a>`,
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
          src: '/img/komiser-logo-light.png',
          srcDark: '/img/komiser-logo-tw-dark.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            label: 'Tailwarden cloud',
            to: 'https://cloud.tailwarden.com',
            position: 'left',
          },
          {
            href: 'https://github.com/tailwarden/komiser',
            className: 'pseudo-icon github-icon',
            position: 'right',
          },
          {
            href: 'https://discord.tailwarden.com',
            className: 'pseudo-icon discord-icon',
            position: 'right',
          },
          {
            type: 'search',
            position: 'right',
          },
          {
            label: 'Sign Up',
            href: 'https://cloud.tailwarden.com/signup',
            position: 'right',
            className: 'dev-portal-signup dev-portal-link',
          },
          {
            label: 'Login',
            href: 'https://cloud.tailwarden.com/login',
            position: 'right',
            className: 'dev-portal-login dev-portal-link',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.tailwarden.com',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/tailwarden',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/tailwarden/komiser',
              },
            ],
          },
          {
            title: 'Developers',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/overview/introduction/getting-started',
              },
              {
                label: 'Contribute',
                to: '/docs/introduction/contribute',
              },
              {
                label: 'Public Roadmap',
                href: 'https://tailwarden.canny.io/',
              },
            ],
          },
          {
            title: 'Company',
            items: [
              {
                label: 'Careers',
                href: 'https://www.tailwarden.com',
              },
              {
                label: 'Tailwarden',
                href: 'https://www.notion.so/tailwarden/Work-at-Tailwarden-269b2aca1c844abc822d8b0f73618a6e',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Tailwarden - Made by humans.`,
      },
      prism: {
        darkTheme: darkCodeTheme,
        additionalLanguages: [
          "powershell",
          "json5",
          "shell-session",
          "bash",
          "yaml",
        ],
      },
    }),
};

module.exports = config;
