// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Datachamp Docs',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'algolia-site-verification',
        content: 'AA6E05B407CFDE9D',
      },
    },
  ],

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
    experimental_vcs: false,
  },

  // Set the production url of your site here
  url: 'https://datachamp-processamentos-e-servicos.github.io',
  baseUrl: '/docusaurus/',
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'datachamp-processamentos-e-servicos', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',

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
          editUrl:
            'https://github.com/datachamp-processamentos-e-servicos/docusaurus/blob/main/',
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
      colorMode: {
        respectPrefersColorScheme: true,
      },
      algolia: {
        appId: 'ZR9E3OBYZK',
        apiKey: '959f69400cf777d4fe4aa03e04d38fd9',
        indexName: 'DatachampDocs',
        translations: {
          button: {
            buttonText: 'Como podemos te ajudar? Pesquise aqui...',
          },
        },
      },
      navbar: {
        title: 'Datachamp',
        logo: {
          alt: 'Datachamp',
          src: 'img/datachamp_logo.png',
        },
        items: [
          {
            to: '/docs/category/sentus',
            label: 'Sentus',
          },
          {
            type: 'search',
            position: 'left',
          },
          {
            href: 'https://wa.me/5434622875',
            label: 'Contato',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentos',
            items: [
              {
                label: 'Sentus',
                to: '/docs/category/sentus',
              },
            ],
          },
          {
            title: 'Fale Conosco',
            items: [
              {
                label: '(54) 3462-2875',
                href: 'https://wa.me/5434622875',
              },
              {
                label: 'datachamp@datachamp.com.br',
                href: 'mailto:datachamp@datachamp.com.br',
              },
            ],
          },
          {
            title: 'Endereço',
            items: [
              {
                label: 'Rua Vicente Dal Bó, 478 - Sala 05 - Garibaldi, RS',
                href: 'https://www.google.com/maps/search/?api=1&query=Rua+Vicente+Dal+Bó,+478+-+Sala+05,+Garibaldi+-+RS',
              }
            ],
          },
          {
            title: 'Sobre nós',
            items: [
              {
                label: 'Acesse nosso site',
                href: 'https://www.datachamp.com.br/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Datachamp Processamento e Serviços LTDA, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
