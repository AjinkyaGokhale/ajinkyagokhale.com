import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  ...svelte.configs['flat/recommended'],
  {
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  {
    rules: {
      // Allow intentional unused args/vars when prefixed with an underscore.
      'no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],

      // Opinionated Svelte rules that don't fit this static, content-driven site:
      // most {#each} blocks iterate fixed i18n/content arrays where keys add noise,
      'svelte/require-each-key': 'off',
      // plain <a href> is correct for a statically-prerendered site (no typed router),
      'svelte/no-navigation-without-resolve': 'off',
      // and our local Map in $derived.by is a pure computation, not reactive state.
      'svelte/prefer-svelte-reactivity': 'off'
    }
  },
  {
    ignores: ['dist/', '.svelte-kit/', 'node_modules/', 'package-lock.json', 'static/']
  }
];
