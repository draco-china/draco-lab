// https://www.npmjs.com/package/eslint-config-ali
// ESlint config for Rax project
const getRaxEslintConfig = require("../getRaxEslintConfig");

module.exports = getRaxEslintConfig({
  extends: [require.resolve("eslint-config-ali/rax"), "prettier"],
});
