/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "monochron",
  tagline:
    "React component library for realtime visualization of arbitrary timeseries data",
  url: "https://sanggonlee.github.io",
  baseUrl: "/monochron/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "sanggonlee", // Usually your GitHub org/user name.
  projectName: "monochron", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "monochron",
      logo: {
        alt: "monochron logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Docs",
        },
        {
          href: "https://github.com/sanggonlee/monochron",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} monochron, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
