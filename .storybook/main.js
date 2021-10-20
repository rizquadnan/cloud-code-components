const path = require("path");
const toPath = (_path) => path.join(process.cwd(), _path);

const supportedLanguages = require("../src/config/CodeEditorSupportedLanguages.js");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
  ],
  babel: async (options) => ({
    ...options,
    "plugins": [
      ...options.plugins,
      ["prismjs", {
          "languages": supportedLanguages,
          "theme": "twilight",
          "css": true
      }]
    ]
  }),
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@emotion/core": toPath("node_modules/@emotion/react"),
          "emotion-theming": toPath("node_modules/@emotion/react"),
        },
      },
    };
  },
};