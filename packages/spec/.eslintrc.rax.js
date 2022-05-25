const { getESLintConfig } = require('./lib');

module.exports = getESLintConfig('rax', {
  rules: {
    'import/no-unresolved': 'warn',
  },
});
