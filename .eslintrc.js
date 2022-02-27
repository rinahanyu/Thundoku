module.exports = {
  root: true,
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs'
  ],
  // カスタムルールを追記
  rules: {
    'vue/multi-word-component-names': 'off'
  }
}
