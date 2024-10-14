module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: ['@nuxtjs', 'prettier', 'plugin:nuxt/recommended'],
  plugins: [],
  rules: {
    skipStrings: 0,
    skipTemplates: 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 5,
        multiline: {
          max: 2,
          allowFirstLine: true
        }
      }
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always'
        }
      }
    ],
    'vue/require-prop-types': 0
  }
}
