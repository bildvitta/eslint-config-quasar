import globals from 'globals'
import { defineConfig } from 'eslint/config'

// plugins
import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import pluginQuasar from '@quasar/app-vite/eslint'
import neostandard from 'neostandard'
import importPlugin from 'eslint-plugin-import'

const isProduction = import.meta.env.NODE_ENV === 'production'

export default defineConfig([
  {
    /**
     * Ignore the following files.
     * Please note that pluginQuasar.configs.recommended() already ignores
     * the "node_modules" folder for you (and all other Quasar project
     * relevant folders and files).
     *
     * ESLint requires "ignores" key to be the only one in this object
     */
    ignores: [
      'node_modules/*',
      'dist/*',
      '.quasar/*',
      'test/*',
      'src-bex/www/*',
      'src-capacitor/*',
      'src-cordova/*',
      'quasar.config.*.temporary.compiled*'
    ]
  },

  importPlugin.flatConfigs.recommended,
  ...neostandard(),
  ...pluginQuasar.configs.recommended(),
  js.configs.recommended,

  /**
   * https://eslint.vuejs.org
   *
   * pluginVue.configs.base
   *   -> Settings and rules to enable correct ESLint parsing.
   * pluginVue.configs[ 'flat/essential']
   *   -> base, plus rules to prevent errors or unintended behavior.
   * pluginVue.configs["flat/strongly-recommended"]
   *   -> Above, plus rules to considerably improve code readability and/or dev experience.
   * pluginVue.configs["flat/recommended"]
   *   -> Above, plus rules to enforce subjective community defaults to ensure consistency.
   */
  ...pluginVue.configs[
    'flat/essential',
    'flat/recommended',
    'flat/strongly-recommended'
  ],

  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',

      globals: {
        ...globals.browser,
        ...globals.node, // SSR, Electron, config files
        process: 'readonly', // process.env.*
        ga: 'readonly', // Google Analytics
        cordova: 'readonly',
        Capacitor: 'readonly',
        chrome: 'readonly', // BEX related
        browser: 'readonly' // BEX related
      }
    },

    // add your custom rules here
    rules: {
      'prefer-promise-reject-errors': 'off',

      // allow debugger during development only
      'no-debugger': isProduction ? 'error' : 'off',

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
      'no-console': isProduction ? ['error', { allow: ['error'] }] : 'off',
      'no-debugger': isProduction ? 'error' : 'off',
      'no-void': 'off',
      'comma-dangle': ['error', 'never'],

      // Import
      'import/default': 'error',
      'import/export': 'error',
      'import/extensions': 'off',
      'import/first': 'off',
      'import/named': 'error',
      'import/namespace': 'error',
      'import/no-extraneous-dependencies': 'off',
      'import/no-named-as-default': 'off',
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
      'vue/block-order': [
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

      // TODO: código abaixo comentado até achar uma solução para o alternativa
      // 'vue/v-on-handler-style': [
      //   'error',
      //   'method',
      //   {
      //     ignoreIncludesComment: false
      //   }
      // ],

      'vue/no-extra-parens': ['error'],
      'vue/func-call-spacing': ['error', 'never'],
      'vue/require-name-property': ['error'],
      'vue/v-for-delimiter-style': ['error', 'in'],

      // Vue disabled rules
      'vue/valid-next-tick': 'off',
      'vue/no-v-html': 'off',
      'vue/no-v-text-v-html-on-component': 'off',
      'vue/new-line-between-multi-line-property': 'off'
    }
  },

  {
    files: [ 'src-pwa/custom-service-worker.js' ],
    languageOptions: {
      globals: {
        ...globals.serviceworker
      }
    }
  }
])
