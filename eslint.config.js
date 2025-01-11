import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

export default [
  {
    ignores: ['dist'], // Ignore the build output directory
  },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020, // ECMAScript version
      sourceType: 'module',
      globals: globals.browser, // Use browser globals like `window` and `document`
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect React version
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
    },
    rules: {
      ...js.configs.recommended.rules, // Enable recommended rules for JS
      ...react.configs.recommended.rules, // Enable recommended rules for React
      ...react.configs['jsx-runtime'].rules, // Enable rules for JSX runtime
      ...reactHooks.configs.recommended.rules, // Enable recommended rules for React hooks
      'react/jsx-no-target-blank': 'off', // Disable target="_blank" warning
    },
  },
];
