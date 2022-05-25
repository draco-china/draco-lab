const { getESLintConfig } = require('./lib');

module.exports = getESLintConfig('react', {
  rules: {
    'import/no-unresolved': 'warn',
    'no-unused-vars': 'warn',
  },
});
