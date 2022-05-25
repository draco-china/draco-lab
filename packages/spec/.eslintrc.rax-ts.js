const { getESLintConfig } = require('./lib');

module.exports = getESLintConfig('rax-ts', {
  rules: {
    'import/namespace': 'warn',
    'import/named': 'warn',
    'import/default': 'warn',
    'import/no-duplicates': 'warn',
    'import/no-self-import': 'warn',
    'import/no-cycle': 'warn',
    'import/no-named-as-default': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
  },
});
