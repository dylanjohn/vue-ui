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
      'vue/multi-word-component-names': 'off',
      'vue/max-attributes-per-line': 'off',              // Allow multiple attributes on one line
      'vue/html-self-closing': 'off',                    // Allow self-closing HTML elements
      'no-undef': 'off',                                 // TypeScript handles this — ESLint doesn't know TS globals
      '@typescript-eslint/no-unused-vars': ['warn', {
        argsIgnorePattern: '^_',
      }],
      '@typescript-eslint/no-empty-object-type': 'off',  // Needed for Vue shims file
      '@typescript-eslint/no-explicit-any': 'warn',      // Warn instead of error
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