const supportedLanguages = require("./src/config/CodeEditorSupportedLanguages.js");

module.exports = {
  babel: {
    plugins: [
      [
        "prismjs",
        {
          languages: supportedLanguages,
          theme: "twilight",
          css: true,
        },
      ],
    ],
  },
};
