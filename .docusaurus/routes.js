import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docusaurus/__docusaurus/debug',
    component: ComponentCreator('/docusaurus/__docusaurus/debug', '324'),
    exact: true
  },
  {
    path: '/docusaurus/__docusaurus/debug/config',
    component: ComponentCreator('/docusaurus/__docusaurus/debug/config', 'fe4'),
    exact: true
  },
  {
    path: '/docusaurus/__docusaurus/debug/content',
    component: ComponentCreator('/docusaurus/__docusaurus/debug/content', '572'),
    exact: true
  },
  {
    path: '/docusaurus/__docusaurus/debug/globalData',
    component: ComponentCreator('/docusaurus/__docusaurus/debug/globalData', 'aab'),
    exact: true
  },
  {
    path: '/docusaurus/__docusaurus/debug/metadata',
    component: ComponentCreator('/docusaurus/__docusaurus/debug/metadata', 'ca1'),
    exact: true
  },
  {
    path: '/docusaurus/__docusaurus/debug/registry',
    component: ComponentCreator('/docusaurus/__docusaurus/debug/registry', 'f2e'),
    exact: true
  },
  {
    path: '/docusaurus/__docusaurus/debug/routes',
    component: ComponentCreator('/docusaurus/__docusaurus/debug/routes', '75c'),
    exact: true
  },
  {
    path: '/docusaurus/blog',
    component: ComponentCreator('/docusaurus/blog', 'b38'),
    exact: true
  },
  {
    path: '/docusaurus/blog/archive',
    component: ComponentCreator('/docusaurus/blog/archive', '33c'),
    exact: true
  },
  {
    path: '/docusaurus/blog/authors',
    component: ComponentCreator('/docusaurus/blog/authors', 'd06'),
    exact: true
  },
  {
    path: '/docusaurus/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/docusaurus/blog/authors/all-sebastien-lorber-articles', 'e1b'),
    exact: true
  },
  {
    path: '/docusaurus/blog/authors/yangshun',
    component: ComponentCreator('/docusaurus/blog/authors/yangshun', '4aa'),
    exact: true
  },
  {
    path: '/docusaurus/blog/first-blog-post',
    component: ComponentCreator('/docusaurus/blog/first-blog-post', '292'),
    exact: true
  },
  {
    path: '/docusaurus/blog/long-blog-post',
    component: ComponentCreator('/docusaurus/blog/long-blog-post', 'fcc'),
    exact: true
  },
  {
    path: '/docusaurus/blog/mdx-blog-post',
    component: ComponentCreator('/docusaurus/blog/mdx-blog-post', '5c8'),
    exact: true
  },
  {
    path: '/docusaurus/blog/tags',
    component: ComponentCreator('/docusaurus/blog/tags', 'd3e'),
    exact: true
  },
  {
    path: '/docusaurus/blog/tags/docusaurus',
    component: ComponentCreator('/docusaurus/blog/tags/docusaurus', 'd83'),
    exact: true
  },
  {
    path: '/docusaurus/blog/tags/facebook',
    component: ComponentCreator('/docusaurus/blog/tags/facebook', '44f'),
    exact: true
  },
  {
    path: '/docusaurus/blog/tags/hello',
    component: ComponentCreator('/docusaurus/blog/tags/hello', '6fc'),
    exact: true
  },
  {
    path: '/docusaurus/blog/tags/hola',
    component: ComponentCreator('/docusaurus/blog/tags/hola', 'a39'),
    exact: true
  },
  {
    path: '/docusaurus/blog/welcome',
    component: ComponentCreator('/docusaurus/blog/welcome', 'b59'),
    exact: true
  },
  {
    path: '/docusaurus/helloMarkdown',
    component: ComponentCreator('/docusaurus/helloMarkdown', '024'),
    exact: true
  },
  {
    path: '/docusaurus/helloReact',
    component: ComponentCreator('/docusaurus/helloReact', '577'),
    exact: true
  },
  {
    path: '/docusaurus/markdown-page',
    component: ComponentCreator('/docusaurus/markdown-page', '388'),
    exact: true
  },
  {
    path: '/docusaurus/docs',
    component: ComponentCreator('/docusaurus/docs', '6b4'),
    routes: [
      {
        path: '/docusaurus/docs',
        component: ComponentCreator('/docusaurus/docs', '234'),
        routes: [
          {
            path: '/docusaurus/docs',
            component: ComponentCreator('/docusaurus/docs', '5e3'),
            routes: [
              {
                path: '/docusaurus/docs/category/tutorial---basics',
                component: ComponentCreator('/docusaurus/docs/category/tutorial---basics', '8b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/category/tutorial---extras',
                component: ComponentCreator('/docusaurus/docs/category/tutorial---extras', '9fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/intro',
                component: ComponentCreator('/docusaurus/docs/intro', 'd18'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/docusaurus/docs/tutorial-basics/congratulations', 'bc2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docusaurus/docs/tutorial-basics/create-a-blog-post', '420'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/docusaurus/docs/tutorial-basics/create-a-document', '8f0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/docusaurus/docs/tutorial-basics/create-a-page', 'e7b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docusaurus/docs/tutorial-basics/deploy-your-site', '8f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/docusaurus/docs/tutorial-basics/markdown-features', '942'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docusaurus/docs/tutorial-extras/manage-docs-versions', 'a40'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docusaurus/docs/tutorial-extras/translate-your-site', '3e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docusaurus/',
    component: ComponentCreator('/docusaurus/', 'c25'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
