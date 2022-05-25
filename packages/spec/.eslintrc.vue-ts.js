const { getESLintConfig } = require('./lib');

module.exports = getESLintConfig('vue-ts', {
  rules: {
    'import/no-unresolved': 'warn',
    'import/namespace': 'warn',
    'import/default': 'warn',
    'import/no-duplicates': 'warn',
    'import/no-self-import': 'warn',
    'import/no-cycle': 'warn',
    'import/no-named-as-default': 'warn',
  },
});
