// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mansa Trade',
  tagline: 'Multi-ChainP2P Marketplace',
  favicon: 'https://mnstrd.co/common/assets/favicons/favicon.ico',

  // Set the production url of your site here
  url: 'https://mansa.wiki',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Mansa-Trade', // Usually your GitHub org/user name.
  projectName: 'wiki', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // CDN Preconnect
  headTags: [
    // Declare a <link> preconnect tag
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://mnstrd.co',
        crossorigin: 'anonymous',
      },
    },
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Mansa-Trade/wiki/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Mansa-Trade/wiki/tree/main/packages/create-docusaurus/templates/shared/',
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
      image: 'img/docusaurus-social-card.jpg',

      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        hideOnScroll: true,
        //title: 'Mansa Trade Wiki',
        logo: {
          alt: 'Mansa Trade Logo',
          src: 'https://mnstrd.co/common/assets/img/logo-light-mansa.trade.svg', 
          srcDark: 'https://mnstrd.co/common/assets/img/logo-mansa.trade.svg', 
        },
        items: [

          {to: '/docs/overview', label: 'Overview', position: 'left'},
          {to: '/docs/category/ecosystem', label: 'Ecosystem', position: 'left'},
          {to: '/docs/category/developers', label: 'Developers', position: 'left'},
          {to: '/docs/category/tokenomics', label: 'Tokenomics', position: 'left'},

          {
            href: "https://mansa.blog",
            // label: "Medium",
            className: "header-link-icon header-medium-link",
            "aria-label": "Mansa Blog",
            position: "right",
          },
          {
            href: "https://x.com/Mansa_Trade",
            // label: "X",
            className: "header-link-icon header-x-link",
            "aria-label": "Mansa X",
            position: "right",
          },
          {
            href: "https://www.facebook.com/mansa.trade",
            // label: "Facbook",
            className: "header-link-icon header-facebook-link",
            "aria-label": "Mansa Facebook",
            position: "right",
          },          
          {
            href: "https://t.me/mansatrade",
            // label: "Telegram",
            className: "header-link-icon header-tg-link",
            "aria-label": "Mansa Telegram",
            position: "right",
          },
          {
            href: "https://discord.com/",
            // label: "Discord",
            className: "header-link-icon header-discord-link",
            "aria-label": "Mansa Discord",
            position: "right",
          },
          {
            href: "https://www.reddit.com/r/Mansa_Trade/",
            // label: "Reddit",
            className: "header-link-icon header-reddit-link",
            "aria-label": "Mansa Reddit",
            position: "right",
          },
          {
            href: "https://github.com/Mansa-Trade",
            // label: "GitHub",
            className: "header-link-icon header-github-link",
            "aria-label": "GitHub repository",
            position: "right",
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Navigation',
            items: [
               
              {to: '/docs/overview', label: 'Overview', },
              {to: '/docs/category/ecosystem', label: 'Ecosystem',},
              {to: '/docs/category/developers', label: 'Developers',},
              {to: '/docs/category/tokenomics', label: 'Tokenomics',},
              
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://x.com/Mansa_Trade',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/mansa.trade',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/mansatrade',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/',
              },
              {
                label: 'Reddit',
                href: 'https://www.reddit.com/r/Mansa_Trade/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Website',
                href: 'https://mansa-trade.com',
              },
              {
                label: '24/7 Chat Support',
                href: 'https://mansa.support',
              },
              {
                label: 'Support Center',
                href: 'https://mansa.support',
              },
              {
                label: 'Blog',
                href: 'https://mansa.blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Mansa-Trade',
              },
            ],
          },
        ],
        copyright: `Copyright © 2023-${new Date().getFullYear()} Mansa Trade.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
