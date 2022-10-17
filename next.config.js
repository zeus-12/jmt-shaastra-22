// module.exports = {
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       config.resolve.fallback.fs = false;
//       config.resolve.fallback.tls = false;
//       config.resolve.fallback.net = false;
//       config.resolve.fallback.child_process = false;
//     }

//     return config;
//   },
// };
module.exports = {
  // other next config
  i18n: {
    locales: ["en", "ms"],
    defaultLocale: "en",
  },

  webpack: (config, options) => {
    config.node = {
      // Some libraries import Node modules but don't use them in the browser.
      // Tell Webpack to provide empty mocks for them so importing them works.
      ...config.node,
      fs: "empty",
      child_process: "empty",
      net: "empty",
      tls: "empty",
    };

    return config;
  },
};
