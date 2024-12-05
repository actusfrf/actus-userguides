import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'c73'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '6a2'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'c77'),
            routes: [
              {
                path: '/docs/actus-demo/demo-user-guide',
                component: ComponentCreator('/docs/actus-demo/demo-user-guide', '63a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/actus-demo/server-curl-samples',
                component: ComponentCreator('/docs/actus-demo/server-curl-samples', 'dd7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/actus-demo',
                component: ComponentCreator('/docs/category/actus-demo', '1af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/dadfir3-demo',
                component: ComponentCreator('/docs/category/dadfir3-demo', '245'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/introduction-to-actus',
                component: ComponentCreator('/docs/category/introduction-to-actus', 'de9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dadfir3-demo/About',
                component: ComponentCreator('/docs/dadfir3-demo/About', '3d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dadfir3-demo/ACTUS Rshiny Demo Guide',
                component: ComponentCreator('/docs/dadfir3-demo/ACTUS Rshiny Demo Guide', '64a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dadfir3-demo/Demo User Guide',
                component: ComponentCreator('/docs/dadfir3-demo/Demo User Guide', '693'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Introduction/Benefits of ACTUS',
                component: ComponentCreator('/docs/Introduction/Benefits of ACTUS', 'ffe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Introduction/core_activities',
                component: ComponentCreator('/docs/Introduction/core_activities', '02b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Introduction/Model-for-analytics',
                component: ComponentCreator('/docs/Introduction/Model-for-analytics', 'd80'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Introduction/Overview',
                component: ComponentCreator('/docs/Introduction/Overview', '728'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Introduction/Understanding-Financial-Contracts-and-Systems',
                component: ComponentCreator('/docs/Introduction/Understanding-Financial-Contracts-and-Systems', '184'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/quickstart',
                component: ComponentCreator('/docs/quickstart', '79e'),
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
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
