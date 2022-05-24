const path = require('path');
const fs = require('fs');

const deepmerge = require('../lib/deepmerge');

const appDir = process.env.INIT_CWD;

const config = [
  {
    file: '.eslintrc.js',
    content: `const { getESLintConfig } = require('@draco/spec'); \n\nmodule.exports = getESLintConfig('common-ts');`,
  },
  {
    file: '.stylelintrc.js',
    content: `const { getStylelintConfig } = require('@draco/spec');\n\nmodule.exports = getStylelintConfig('common');`,
  },
  {
    file: '.prettierrc.js',
    content: `const { getPrettierConfig } = require('@draco/spec');\n\nmodule.exports = getPrettierConfig('common');`,
  },
  {
    file: '.commitlintrc.js',
    content: `const { getCommitlintConfig } = require('@draco/spec');\n\nmodule.exports = getCommitlintConfig('common');`,
  },
  {
    file: '.markdownlint.json',
    content: `{
  "extends": "@draco/spec/lib/markdownlint"
}`,
  },
  {
    file: '.editorconfig',
    content: `# http://editorconfig.org
root = true

[*]
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false

[makefile]
indent_style = tab
indent_size = 4`,
  },
  {
    file: 'tsconfig.json',
    content: `{
  "extends": "@draco/spec/lib/tsconfig/base.json",
  "compilerOptions": {
    "lib": ["ES2015"],
    "module": "ESNext",
    "target": "ES6",
    "jsx": "preserve"
  },
  "exclude": ["node_modules"]
}`,
  },
];

for (let index = 0; index < config.length; index++) {
  const element = config[index];
  const filePath = path.join(appDir, element.file);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, element.content);
  }
}

const pkg = fs.readFileSync(path.join(appDir, 'package.json'), 'utf8');
const pkgJson = JSON.parse(pkg);
pkgJson.scripts = deepmerge(pkgJson.scripts, {
  'lint-staged': 'lint-staged',
  'lint-staged:js': 'eslint --ext .js,.jsx,.ts,.tsx ',
  'lint:fix': 'eslint --fix --cache --ext .js,.jsx,.ts,.tsx --format=pretty ./src && npm run lint:style',
  'lint:js': 'eslint --cache --ext .js,.jsx,.ts,.tsx --format=pretty ./src',
  'lint:prettier': 'prettier --check "src/**/*" --end-of-line auto',
  'lint:style': 'stylelint --fix "**/*.{css,scss,less}"',
  prettier: 'prettier -c --write "src/**/*"',
});

pkgJson.husky = deepmerge(pkgJson.husky, {
  hooks: {
    'pre-commit': 'lint-staged',
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
  },
});

pkgJson['lint-staged'] = deepmerge(pkgJson['lint-staged'], {
  '**/*.{css,scss,less}': 'stylelint',
  '**/*.{js,jsx,ts,tsx}': 'npm run lint-staged:js',
  '**/*.{js,jsx,tsx,ts,less,md,json}': 'prettier --write',
});

fs.writeFileSync(path.join(appDir, 'package.json'), JSON.stringify(pkgJson, null, '\t'));
