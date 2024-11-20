import js from '@eslint/js';
import globals from 'globals';
import stylisticJs from '@stylistic/eslint-plugin-js';

export default [
  {
    'files': [
      '**/*.js',
      '**/*.mjs'
    ],
    'languageOptions': {
      'ecmaVersion': 'latest',
      'sourceType': 'module',
      'globals': {
        ...globals.browser
      }
    },

    'plugins': {
      '@stylistic/js': stylisticJs
    },

    'rules': {
      ...js.configs.recommended.rules,
      ...stylisticJs.configs['all-flat'].rules,
      '@stylistic/js/eol-last': [
        'error',
        'always'
      ],
      '@stylistic/js/quotes': [
        'error',
        'single'
      ],
      '@stylistic/js/indent': [
        'error',
        2
      ]
    }
  }
];
