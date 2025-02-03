// @ts-check
// See: https://docusaurus.io/docs/api/docusaurus-config

const prismThemes = require('prism-react-renderer').themes;
const path = require('path');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'FSHOST Docs',
  tagline: 'Get FREE game server hosting for CS2, CoD4, CoD2, CS 1.6, CSS, and more! Upgrade to Pro for premium paid server options.',
  favicon: 'img/favicon.ico',
  url: 'https://help.fshost.me',
  baseUrl: '/',
  organizationName: 'fshostme',
  projectName: 'docs',
  trailingSlash: false,
  customFields: {
    marketingSite: 'https://fshost.me',
  },
  i18n: {
    defaultLocale: 'en-GB',
    locales: ['en-GB'],
  },

  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: false,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/fshost-logo.png',
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
            name: 'mobile-web-app-capable',
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
            href: '/img/fshost-logo.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/img/fshost-logo.png',
            color: '#18e888',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: '/img/fshost-logo.png',
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
        fromExtensions: ['html', 'htm'],
        toExtensions: ['exe', 'zip'],
        redirects: [],
      },
    ],
    [ 
      {
        languages: ['en'],
      }
    ]
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/fshostme/docs/tree/main/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: {
          feedOptions: {
            type: 'all',
            title: 'FSHOST.me Update Blog',
            description: 'Description of the updates behind FSHOST.me',
            copyright: `Copyright © ${new Date().getFullYear()} FSHOST.me`,
          },
          showReadingTime: false,
          readingTime: ({content, frontMatter, defaultReadingTime}) =>
            defaultReadingTime({content, options: {wordsPerMinute: 300}}),
          onUntruncatedBlogPosts: 'ignore',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'cs2update',
        routeBasePath: 'cs2update',
        path: './cs2update/',
        blogTitle: 'CS2 Update',
        blogDescription: 'A little blog for CS2 updates',
        blogSidebarTitle: 'Recent Posts',
        blogSidebarCount: 'ALL',
        sortPosts: 'descending',
        showReadingTime: true,
        onUntruncatedBlogPosts: 'ignore',
        feedOptions: {
          type: 'rss',
          title: 'CS2 Updates Blog',
          copyright: `Copyright © ${new Date().getFullYear()}`,
          description: 'Stay informed with the latest CS2 news from FSHOST.me, featuring updates and enhancements for our CS2 servers.',
        },
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'news',
        routeBasePath: 'news',
        path: './news/',
        blogTitle: 'Website Update',
        blogDescription: 'A little blog for Website updates',
        blogSidebarTitle: 'Website Updates',
        blogSidebarCount: 'ALL',
        showReadingTime: true,
        onUntruncatedBlogPosts: 'ignore',
        truncateMarker: /<!--\s*truncate\s*-->/,
        feedOptions: {
          type: 'all',
          title: 'Website Updates',
          description: 'Stay informed with the latest CS2Pro news from FSHOST.me, featuring updates and enhancements for our CS2Pro servers.',
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'undefined',
      docs: {
        sidebar: {
          hideable: false,
          autoCollapseCategories: true,
        },
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        hideOnScroll: false,
        title: 'FSHOST Help',
        logo: {
          href: "/docs/welcome",
          alt: 'FSHOST',
          src: 'img/fshost-logo.png',
          srcDark: 'img/fshost-logo.png'
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
            label: 'Game Server Help',
          },
          {
            type: "dropdown",
            position: "left",
            label: "News",
            items: [
              {
                label: "CS2 Server News",
                to: `/cs2update`,
                activeBaseRegex: 'cs2update',
              },
              {
                label: "Website News",
                to: `/news`,
                activeBaseRegex: 'blog',
              },
            ],
          },
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
                default: return '<a href="https://fshost.me/pro/pricing/">Rent Pro Server</a>';
              }
            })(),
          },
          {
            type: 'html',
            position: 'right',
            className: 'externalLink',
            value: (() => {
              switch (process.env.DOCUSAURUS_CURRENT_LOCALE) {
                default: return '<a href="https://fshost.me/">Back to Website ⤾</a>';
              }
            })(),
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
                label: 'Rent a Game Server',
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
  future: {
    experimental_faster: true,
  },
};

export default config;
