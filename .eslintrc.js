module.exports = {
  // {off: 0, warn: 1, error: 2}
  'env': {
    'browser': true,
    'node': true,
    'es6': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  // "plugins": [
  //     "es5"
  // ],
  'parserOptions': {
    'sourceType': 'module',
    'ecmaVersion': 2018,
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true
    }
  },
  'rules': {
    'no-var': 1,
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ],
    // "semi": 0,
    'no-unused-vars': [
      'error',
      {
        'vars': 'all',
        'args': 'none',
        'ignoreRestSiblings': false
      }
    ],
    'no-console': 0,
    'curly': 0,
    'eqeqeq': 'error',
    'no-inner-declarations': 0,
    'space-before-function-paren': 'error',
    'space-in-parens': 'error',
    'comma-spacing': 'error',
    'no-trailing-spaces': 'error',
    'key-spacing': 'error',
    'prefer-const': 'error',
    'space-infix-ops': 'error',
    'arrow-spacing': 'error',
    'object-curly-spacing': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never'],
    // eslint-react
    'react/prop-types': 0,
  },
  'globals': {
    'assert': true,
    'D': true,
    'DApi': true,
    'USER': true,
    '$': true,
    '$timeout': true,
    'wx': true,
  }
}
