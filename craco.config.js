const path = require("path");

module.exports = {
  style: {
    css: {
      loaderOptions: {},
    },
    postcss: {
      plugins: [require("tailwindcss")],
    },
  },
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      paths.appBuild = webpackConfig.output.path = path.resolve("craco-build");
      return webpackConfig;
    },
  },
};
