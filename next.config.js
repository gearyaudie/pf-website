const nextTranslate = require("next-translate");

module.exports = {
  ...nextTranslate(),
  distDir: "out",
};
