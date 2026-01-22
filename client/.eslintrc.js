module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential', // Vue3基础规则
    'eslint:recommended',
    '@vue/eslint-config-typescript', // TS规则（如果用TS）
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
    'unused-imports', // 关键：添加未使用导入检测插件
  ],
  rules: {
    // 核心规则1：检测并报错未使用的导入
    'unused-imports/no-unused-imports': 'error',
    // 核心规则2：检测并报错未使用的变量（覆盖ESLint默认规则）
    'unused-imports/no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_', // 忽略下划线开头的变量（如 _temp）
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    // 可选：关闭ESLint默认的未使用变量规则（避免冲突）
    'no-unused-vars': 'off',
  },
  ignorePatterns: [
    'node_modules/**', // 忽略 node_modules 下所有文件
    'dist/**', // 可选：忽略打包产物目录
    '.vite/**', // 可选：忽略 vite 临时目录
    '*.d.ts', // 可选：忽略类型声明文件（如 auto-imports.d.ts）
    'public/**/*',
  ],
}
