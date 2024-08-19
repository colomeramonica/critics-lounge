import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

export default [
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  { files: ['**/*.js'], languageOptions: { sourceType: 'module' } },
  { languageOptions: { globals: globals.browser } },
  { settings: { react: { version: 'detect' } } },
  {
    rules: {
      'no-unused-vars': 'error',
      'no-undef': 'error',
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];