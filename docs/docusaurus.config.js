module.exports = {
  title: 'A.I.D',
  tagline: 'AIOps Platform',
  url: 'https://aid.autoai.org',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'autoai', // Usually your GitHub org/user name.
  projectName: 'aid', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'AID',
      logo: {
        alt: 'AID',
        src: 'img/logo_white.png',
      },
      links: [
        {
          to: 'docs/overview',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/autoai/aid',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Quick Start',
              to: 'docs/quickstart',
            },
            {
              label: 'Full Docs',
              to: 'docs/overview',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Google Group',
              href: 'https://groups.google.com/forum/#!newtopic/autoai',
            },
            {
              label: 'Slack',
              href: 'https://join.slack.com/t/autoaiworkspace/shared_invite/zt-d0ibh5gj-_AIRcj1CedTBiXeqJsMwwQ',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/autoai/aid',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/aid_aiops',
            },
          ],
        },
      ],
      copyright: ``,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};