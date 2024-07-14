// @ts-check
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'FSHOST Docs',
  tagline: 'FREE game server hosting for CS2, CoD4, CoD2, CS1.6, CSS, and more! We also offer paid game servers via Pro.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.fshost.me',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'fshostme', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onDuplicateRoutes: 'throw',
  onBrokenAnchors: 'throw',

  customFields: {
    marketingSite: 'https://fshost.me',
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/favicon-96x96.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#1b1b1d',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#000',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/img/srcDark.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/img/srcDark.png',
            color: '#18e888',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: '/img/srcDark.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#000',
          },
        ],
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        fromExtensions: ['html', 'htm'], // /myPage.html -> /myPage
        toExtensions: ['exe', 'zip'], // /myAsset -> /myAsset.zip (if latter exists)
        redirects: [
          // /docs/oldDoc -> /docs/newDoc
          /*{
            to: '/docs/contribution-guides',
            from: '/docs/contribution-submission',
          },
          {
            to: '/docs/contribution-guides-guidelines',
            from: '/docs/contribution-guidelines',
          },
          {
            to: '/docs/vserver-root-difference',
            from: '/docs/vserver-root-unterschied',
          },
          // Redirect from multiple old paths to the new path
          /*{
            to: '/docs/newDoc2',
            from: ['/docs/oldDocFrom2019', '/docs/legacyDocFrom2016'],
          },*/
        ],
      },
    ],
    [ 
      require.resolve('docusaurus-lunr-search'),
      {
        languages: ['en'] // language codes
      }
    ]
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/fshostme/docs/tree/main/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/fshostme/docs/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'undefined',
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: 'FSHOST Docs',
        logo: {
          href: "/docs/welcome",
          alt: 'FSHOST',
          src: 'img/favicon-96x96.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'guidesSidebar',
            position: 'left',
            label: 'General',
          },
          {
            type: 'docSidebar',
            sidebarId: 'gameserverSidebar',
            position: 'left',
            label: 'Gameserver',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/fshostme/docs',
            label: 'GitHub',
            position: 'right',
          },
        {
          type: 'html',
          position: 'right',
          className: 'externalLink',
          value: (() => {
            switch (process.env.DOCUSAURUS_CURRENT_LOCALE) {
              default: return '<a href="https://fshost.me/pro/pricing/">Rent a gameserver</a>';
            }
          })(),
        },
        {
          type: 'html',
          position: 'right',
          className: 'externalLink',
 
          value: (() => {
            switch (process.env.DOCUSAURUS_CURRENT_LOCALE) {
              default: return '<a href="https://fshost.me/">Back to FSHOST ⤾</a>';
            }
          })(),
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
      footer: {
        style: 'dark',
        links: [
          {
          title: 'Rent a Server',
          items: [
            {
              label: 'Rent a Gameserver',
              href: 'https://fshost.me/pro/pricing',
            },
            {
              label: 'Top-up your account',
              href: 'https://fshost.me/pro/top-up',
            },
          ],
        },
          {
            title: 'Social',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Discord',
                href: 'https://fshost.me/discord',
              },
              {
                label: 'X',
                href: 'https://x.com/fshostme',
              },
            ],
          },
          {
            title: 'Support',
            items: [
              {
                label: 'Looking Glass',
                href: 'https://fshost.me/lg',
              },
              {
                label: 'Server Status',
                href: 'https://status.fsho.st',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Terms of Service',
                href: 'https://fshost.me/terms-of-service',
              },
              {
                label: 'Privacy Policy',
                href: 'https://fshost.me/privacy-policy',
              },
              {
                label: 'Refund Policy',
                href: 'https://fshost.me/refund-policy',
              },
          ],
        },
      ],
        copyright: `Copyright © ${new Date().getFullYear()} FSHOST.me`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
