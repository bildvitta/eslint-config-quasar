const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  root: true,

  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 2018,
    sourceType: 'module'
  },

  env: {
    browser: true
  },

  extends: [
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:quasar/recommended',
    'standard'
  ],

  plugins: ['vue', 'quasar'],

  globals: {
    ga: 'readonly',
    __statics: 'readonly',
    process: 'readonly',
    chrome: 'readonly',
    cordova: 'readonly',
    Capacitor: 'readonly',
  },

  rules: {
    // Global
    'max-len': [
      'error',
      {
        code: 120,
        tabWidth: 2,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true
      }
    ],
    'arrow-parens': ['error', 'as-needed'],
    'one-var': ['error', 'never'],
    'multiline-ternary': 'off',
    'no-console': isProduction ? 'error' : 'off',
    'no-debugger': isProduction ? 'error' : 'off',
    'no-void': 'off',

    // Import
    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': 'off',
    'import/first': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',

    // Promise
    'prefer-promise-reject-errors': 'off',

    // Vue extra rules
    'vue/singleline-html-element-content-newline': [
      'error',
      {
        ignoreWhenNoAttributes: true,
        ignoreWhenEmpty: true,
        ignores: []
      }
    ],
    'vue/multiline-html-element-content-newline': [
      'error',
      {
        ignoreWhenEmpty: true,
        allowEmptyLines: false,
        ignores: []
      }
    ],
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      {
        registeredComponentsOnly: false,
        ignores: []
      }
    ],
    'vue/attributes-order': ['error', { alphabetical: true }],
    'vue/block-spacing': ['error', 'always'],
    'vue/no-reserved-component-names': ['error'],
    'vue/static-class-names-order': ['error'],
    'vue/v-slot-style': ['error', 'shorthand'],
    'vue/object-curly-spacing': ['error', 'always'],
    'vue/key-spacing': ['error', { beforeColon: false }],
    'vue/prefer-template': ['error'],
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/component-tags-order': [
      'error',
      {
        order: ['template', 'script', 'style']
      }
    ],
    'vue/block-tag-newline': ['error'],
    'vue/html-button-has-type': [
      'error',
      {
        button: true,
        submit: true,
        reset: true
      }
    ],
    'vue/no-empty-component-block': ['error'],
    'vue/no-multiple-objects-in-class': ['error'],
    'vue/no-potential-component-option-typo': [
      'error',
      {
        presets: ['all']
      }
    ],
    'vue/no-static-inline-styles': ['error'],
    'vue/no-this-in-before-route-enter': ['error'],
    'vue/no-useless-mustaches': [
      'error',
      {
        ignoreIncludesComment: false,
        ignoreStringEscape: false
      }
    ],
    'vue/no-useless-v-bind': [
      'error',
      {
        ignoreIncludesComment: false,
        ignoreStringEscape: false
      }
    ],
    'vue/prefer-separate-static-class': ['error'],
    'vue/prefer-true-attribute-shorthand': ['error'],
    'vue/require-direct-export': [
      'error',
      {
        disallowFunctionalComponentFunction: false
      }
    ],
    'vue/require-name-property': ['error'],
    'vue/v-for-delimiter-style': ['error', 'in'],
    'vue/v-on-function-call': [
      'error',
      'never',
      {
        ignoreIncludesComment: false
      }
    ],
    'vue/no-extra-parens': ['error'],

    // Vue disabled rules
    'vue/valid-next-tick': 'off',
    'vue/no-v-html': 'off',
    'vue/new-line-between-multi-line-property': 'off'
  }
}
