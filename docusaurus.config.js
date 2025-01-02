// @ts-check
// See: https://docusaurus.io/docs/api/docusaurus-config

const prismThemes = require('prism-react-renderer').themes;
const path = require('path');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'FSHOST Docs',
  tagline: 'Get FREE game server hosting for CS2, CoD4, CoD2, CS 1.6, CSS, and more! Upgrade to Pro for premium paid server options.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://help.fshost.me',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'fshostme', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  trailingSlash: false,

  //onBrokenLinks: 'throw',
  //onBrokenMarkdownLinks: 'throw',
  //onDuplicateRoutes: 'throw',
  //onBrokenAnchors: 'throw',

  customFields: {
    marketingSite: 'https://fshost.me',
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
      {
        languages: ['en'], // language codes
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
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
        showReadingTime: true,
        onUntruncatedBlogPosts: 'ignore',
        feedOptions: {
          type: 'rss',
          title: 'CS2 Updates Blog',
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
      // Replace with your project's social card
      image: 'undefined',
      docs: {
        sidebar: {
          hideable: false,
          autoCollapseCategories: false,
        },
      },
      /*announcementBar: {
        id: 'announcement-bar',
        content:
        'Welcome to our new Docs/FAQ page!',
        backgroundColor: '#3949AB',
        textColor: '#FFFFFF',
        isCloseable: false,
      },*/
      colorMode: {
        defaultMode: 'dark',
          disableSwitch: true,
          respectPrefersColorScheme: false,
      },
      navbar: {
        hideOnScroll: false,
        title: 'FSHOST.me Help Guide',
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
            label: 'Gameserver Help',
          },
        {
          // Dropdown menu in the navbar for "Learn" section
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
  }
};

export default config;
