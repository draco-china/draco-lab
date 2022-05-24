# @draco/spce

基于[《阿里巴巴前端规约及配套工具》](https://github.com/alibaba/f2e-spec) 封装

一个包含 prettier，eslint，stylelint, commitlint, markdownlint, tsconfig 的配置文件合集

## Stylelint 版本已升级至 v14，需要做如下修改

- v14 已经不支持 `--syntax` 选项，请在 `package.json` 删除相应内容

- v14 需要手动制定需要校验的文件类型，在 vscode setting 设置如下

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": true
  },
  "css.validate": false,
  "less.validate": false,
  "scss.validate": false,
  "stylelint.snippet": ["css", "less", "postcss", "scss", "html"],
  "stylelint.validate": ["css", "less", "postcss", "scss", "html", "vue"]
}
```

## Installation

```sh
npm install @draco/spce -D
```

## Usage

`.eslintrc.js`

```js
// .eslintrc.js
const { getESLintConfig } = require('@draco/spce');

// getESLintConfig(rule: 'common'|'common-ts'|'rax'|'rax-ts'|'react'|'react-ts'|'vue'|'vue-ts', customConfig?);
module.exports = getESLintConfig('common-ts');
```

`.stylelintrc.js`

```js
// .stylelintrc.js
const { getStylelintConfig } = require('@draco/spce');

// getStylelintConfig(rule: 'common'|'rax'|'react'|'vue', customConfig?);
module.exports = getStylelintConfig('common');
```

`.prettierrc.js`

```js
// .prettierrc.js
const { getPrettierConfig } = require('@draco/spce');

// getPrettierConfig(rule: 'common'|'rax'|'react'|'vue', customConfig?);
module.exports = getPrettierConfig('common');
```

`.commitlintrc.js`

```js
// .commitlintrc.js
const { getCommitlintConfig } = require('@draco/spce');

// getCommitlintConfig(rule: 'common'|'rax'|'react'|'vue', customConfig?);
module.exports = getCommitlintConfig('common');
```

`.markdownlint.json`

```js
{
  "extends": "@draco/spec/lib/markdownlint"
}
```

`tsconfig.json`
内置 base / nextjs / react-libary 三种配置文件

```js
{
  "extends": "@draco/spec/lib/tsconfig/base.json",
  "compilerOptions": {
    "lib": ["ES2015"],
    "module": "ESNext",
    "target": "ES6",
    "jsx": "preserve"
  },
  "exclude": ["node_modules"]
}

```
