module.exports = {
  'env': { 
    'browser': true,
    'node': true,
    'es6': true
  },
  'extends': ['eslint:recommended', 'plugin:react/recommended'],
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaFeatures': {
      'classes': true,
      'experimentalObjectRestSpread': true,
      'jsx': true
    },
    'ecmaVersion': 6,
    'sourceType': 'module'
  },
  'plugins': [
    'babel',
    'react'
  ],
  'rules': {
    'array-bracket-spacing': [2, 'never'],
    'babel/arrow-parens': [2, 'always'],
    'babel/new-cap': 0,
    'babel/object-shorthand': 1,
    'block-scoped-var': 2,
    'constructor-super': 2,
    'indent': [2, 2, {'SwitchCase': 1}],
    'linebreak-style': [2, 'unix'],
    'no-const-assign': 2,
    'no-useless-constructor': 2,
    'no-unused-vars': [2, {'args': 'none'}],
    'object-shorthand': 2,
    'one-var-declaration-per-line': 2,
    'prefer-arrow-callback': 2,
    'prefer-const': 2,
    'prefer-spread': 2,
    'prefer-template': 2,
    'react/jsx-key': 2,
    'react/jsx-max-props-per-line': [2, {'maximum': 4}],
    'react/jsx-no-duplicate-props': [2, {'ignoreCase': true}],
    'react/jsx-space-before-closing': [2, 'always'],
    'react/no-did-mount-set-state': 2,
    'react/no-did-update-set-state': 2,
    'react/no-direct-mutation-state': 2,
    'react/no-is-mounted': 2,
    'react/no-unknown-property': 2,
    'quotes': [2, 'single', {'avoidEscape': true, 'allowTemplateLiterals': true}],
    'semi': [2, 'always'],
    'strict': 0
  }
};
