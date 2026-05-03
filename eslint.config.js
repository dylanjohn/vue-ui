import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import tseslint from 'typescript-eslint'

export default [
  // Base JS recommended rules
  js.configs.recommended,

  // TypeScript recommended rules
  ...tseslint.configs.recommended,

  // Vue 3 recommended rules (includes template linting)
  ...pluginVue.configs['flat/recommended'],

  // Tell ESLint that .vue files use TypeScript
  {
    files: ['*.vue', '**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },

  // Project-specific overrides
  {
    rules: {
      // Relax rules that are too noisy early on — tighten as the team settles in
      'vue/multi-word-component-names': 'off',          // Allow single-word names like Button, Input
      '@typescript-eslint/no-unused-vars': ['warn', {   // Warn instead of error for unused vars
        argsIgnorePattern: '^_',                         // Allow _unused params
      }],
    },
  },

  // Ignore build output and config files
  {
    ignores: [
      'dist/',
      'storybook-static/',
      'node_modules/',
      '*.config.*',
    ],
  },
]
