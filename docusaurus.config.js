const TwitterSvg =
  '<svg style="fill: #1DA1F2; vertical-align: middle;" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>';

module.exports = {
  title: 'SCHeMa',
  tagline: 'Scientific Containers on Heterogeneous Machines',
  url: 'https://schema.athenarc.gr',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'athenarc', // Usually your GitHub org/user name.
  projectName: 'schema-web', // Usually your repo name.
  customFields: {
    heroTitle: 'Scientific Containers on Heterogeneous Machines',
    heroSubTitle: 'Build secure dashboards and interactive web apps in Python, Bash, PowerShell, C# or Node.js. No web dev experience required.',
  },
  themeConfig: {
    docs: {
          sidebar: {
            hideable: false
          }
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      hideOnScroll: true,
      title: 'SCHeMa',
      logo: {
        alt: 'SCHeMa Logo',
        src: 'img/logo2.svg',
        srcDark: 'img/logo2.svg',
      },
      items: [
        {
          type: 'docSidebar',
          position: 'left',
          sidebarId: 'user',
          label: 'User guide',
        },
        {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'dev',
            label: 'Documentation',
        },
        {
          to: 'blog',
          label: 'Blog',
          position: 'left'
        },
        {
          to: 'about',
          label: 'About',
          position: 'left',
        },
      ],
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
      additionalLanguages: ['powershell', 'yaml'],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'User guide',
              to: 'docs/user/',
            },
            {
              label: 'Documentation',
              to: 'docs/dev/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/pgletio',
            },
            {
              label: 'Blog',
              to: 'blog',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'SCHeMa code',
              href: 'https://github.com/athenarc/schema',
            },
            {
              label: 'CLIMA code',
              href: 'https://github.com/athenarc/clima',
            },
          ],
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()}, Sknow-lab, ATHENA RC`,
    }
    // algolia: {
    //   apiKey: 'api-key',
    //   indexName: 'index-name',
    //   appId: 'app-id', // Optional, if you run the DocSearch crawler on your own
    //   algoliaOptions: {}, // Optional, if provided by Algolia
    // }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        language: ["en"],
        indexBlog: false,
        highlightSearchTermsOnTargetPage: true,
        searchBarShortcutHint: false,
        docsRouteBasePath: "/",
      }),
    ],
  ],
};
