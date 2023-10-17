// eslint-define-config可以帮助我们做语法提示
const { defineConfig } = require('eslint-define-config')
​
module.exports = defineConfig({
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  // 启用的规则
  extends: [
    'plugin:vue/vue3-recommended',
    'standard',
    'prettier',
    'plugin:prettier/recommended',
  ],
   globals: {
     defineProps: 'readonly',
     defineEmits: 'readonly',
     defineExpose: 'readonly',
     withDefaults: 'readonly',
  },
  parserOptions: {
    // js的版本
   ecmaVersion: 6,
    // 解析器
    parser: '@typescript-eslint/parser',
    // 模块化方案
    sourceType: 'module',
  },
  // 引用的插件  下载的插件去掉eslint-plugin-前缀引入
  plugins: ['vue', '@typescript-eslint', 'import', 'node', 'promise'],
  // 自定义规则
  rules: {},
})