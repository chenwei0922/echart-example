const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    "warnOnUnsupportedTypeScriptVersion": false
  },
  plugins: ['@typescript-eslint', 'prettier'],

  rules: {
    'prettier/prettier': ['error', { printWidth: 120 }],
    // js/ts
    camelcase: ['error', { properties: 'never' }],
    'no-console': 'off',
    'no-debugger': 'warn',
    'no-constant-condition': ['error', { checkLoops: false }],
    'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
    'no-return-await': 'error',
    'no-var': 'error',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'prefer-const': ['warn', { destructuring: 'all', ignoreReadBeforeAssign: true }],
    'prefer-arrow-callback': ['error', { allowNamedFunctions: false, allowUnboundThis: true }],
    'object-shorthand': ['error', 'always', { ignoreConstructors: false, avoidQuotes: true }],
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'no-redeclare': 'off',

    // js/ts
    // 行尾不使用分号
    // semi: ['error', 'never'],
    // 定义未使用
    'no-unused-vars': ['error', { vars: 'all', args: 'none' }],
    // 文档末尾要求空白行
    'eol-last': 'error',
    // '//'后面要求空格
    'spaced-comment': ['error', 'always'],
    // 要求getter/setter 成对出现
    'accessor-pairs': 'error',

    '@typescript-eslint/no-redeclare': 'error',
    // ts
    // 需要导出函数和类的公共类方法的显示返回和参数类型
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // 禁止使用该any类型
    '@typescript-eslint/no-explicit-any': 'off',
    // 不允许使用后缀运算符的非空断言
    '@typescript-eslint/no-non-null-assertion': 'off',
    // 不允许使用require语句
    '@typescript-eslint/no-var-requires': 'off',
    // 禁止空函数
    '@typescript-eslint/no-empty-function': 'off',
    // 在定义之前禁止使用变量
    // '@typescript-eslint/no-use-before-define': 'off',
    // 禁止ts使用评论或在指令后要求描述
    '@typescript-eslint/ban-ts-comment': 'off',
    // 禁止使用特定类型
    // '@typescript-eslint/ban-types': 'off',
    // 定义未使用
    '@typescript-eslint/no-unused-vars': 'off',
  }
})