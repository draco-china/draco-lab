// https://www.npmjs.com/package/stylelint-config-ali
// stylelint config for vue project
module.exports = {
  plugins: ['stylelint-less', 'stylelint-scss', 'stylelint-order'],
  extends: ['stylelint-config-ali', 'stylelint-config-prettier'],
  overrides: [
    {
      files: '**/*.scss',
      customSyntax: require.resolve('postcss-scss'),
    },
    {
      files: '**/*.less',
      customSyntax: require.resolve('postcss-less'),
    },
    {
      files: '**/*.{html,vue}',
      customSyntax: require.resolve('postcss-html'),
    },
    {
      files: '**/*.css',
      customSyntax: require.resolve('postcss-safe-parser'),
    },
  ],
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
};
