const nextTranslate = require("next-translate");

module.exports = {
  ...nextTranslate(),
  target: "serverless",
  distDir: "out",
};
