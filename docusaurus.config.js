// @ts-check

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'KickTools Docs',
  tagline: 'KickTools Documentation and Guides',
  url: 'https://docs.kicktools.app',
  organizationName: 'KickTools, LLC',
  projectName: 'kicktools-docs',
  favicon: 'img/favicon.ico',

  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          sidebarPath: './sidebars.js', // Sidebar for docs
          editUrl: 'https://github.com/kicktools/docs/edit/master/', // Link to edit pages in your GitHub repo
        },
        blog: {
          path: './changelog', // Ensure this path points to your changelog folder
          routeBasePath: 'changelog', // URL base path for the changelog (changeable if needed)
          showReadingTime: true,
          blogSidebarTitle: 'Changelog', // Title for the sidebar (can adjust if needed)
          blogSidebarCount: 'ALL',
          editUrl: 'https://github.com/kicktools/docs/edit/master/changelog/', // Link to edit changelog entries
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: {
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    navbar: {
      title: 'KickTools Docs',
      logo: {
        alt: 'KickTools Logo',
        src: 'img/logo_KickTools_Dark.svg',  // Light mode logo
        srcDark: 'img/logo_KickTools_Light.svg', // Dark mode logo
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar', // Sidebar for your documentation
          position: 'left',
          label: 'Docs',
        },
        { to: '/changelog', label: 'Changelog', position: 'left' }, // Link to your changelog
        {
          href: 'https://github.com/kicktools',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Docs',
              to: '/docs',
            },
            {
              label: 'Changelog',
              to: '/changelog',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/kicktools',
            },
          ],
        },
      ],
      copyright: `Copyright © 2013 - ${new Date().getFullYear()} KickTools, LLC. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
  
};

export default config;
