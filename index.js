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
    // Never put spaces in opening/closing brackets of arrays
    'array-bracket-spacing': [2, 'never'],
    'arrow-spacing': 2,
    'babel/arrow-parens': [2, 'always'],
    'babel/new-cap': 0,
    'babel/object-curly-spacing': [2, 'never'],
    'babel/object-shorthand': 2,
    'block-scoped-var': 2,
    'block-spacing': [2, 'always'],
    'brace-style': [2, '1tbs'],
    'camelcase': [2, {'properties': 'never'}],
    // No spacing before comma, spaces after comma
    'comma-spacing': [2, {'before': false, 'after': true}],
    // Commas between properties must end on the same line, never begin the new line
    'comma-style': [2, 'last'],
    // Does not allow spacing inside object property accessors: use `obj[a]`, not `obj[ a ]`
    'computed-property-spacing': [2, 'never'],
    'constructor-super': 2,
    // Multi-line chaining must start new-line chained properties with a dot
    'dot-location': [2, 'object'],
    // Must use triple equality check, except for checking null/undefined
    'eqeqeq': [2, 'allow-null'],
    'indent': [2, 2, {'SwitchCase': 1}],
    'key-spacing': [2, {'beforeColon': false, 'afterColon': true, 'mode': ' strict'}],
    'linebreak-style': [2, 'unix'],
    'no-array-constructor': 2,
    'no-const-assign': 2,
    // No `else` statement needed if `if` statement returns (Guard clause)
    'no-else-return': 2,
    'no-extra-label': 2,
    // Must prefix all floats with `0` if it is a decimal property: use `0.15`, not `.15`
    'no-floating-decimal': 2,
    // Must convert value types explicitly: use `String(foo)`, not `"" + foo`
    'no-implicit-coercion': 2,
    // Cannot use `__iterator__` property on objects
    'no-iterator': 2,
    'no-label-var': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 2,
    'no-multi-spaces': 2,
    'no-native-assign': 2,
    'no-new': 2,
    // Cannot do `new Function(...)`
    'no-new-func': 2,
    'no-new-object': 2,
    // Cannot do `new (require('path/to/some/file'))`
    'no-new-require': 2,
    'no-new-wrappers': 2,
    // Cannot reassign function parameters
    'no-param-reassign': 2,
    // Cannot use `__proto__` property on objects
    'no-proto': 2,
    // Disallows the use of `++` and `--` operators
    'no-plusplus': 2,
    'no-redeclare': 2,
    'no-return-assign': 2,
    'no-scrip-url': 2,
    'no-self-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    // No space between function name and brackets when invoking: use `myFunc()`, not `myFunc ()`
    'no-spaced-func': 2,
    // No trailing spaces on lines
    'no-trailing-spaces': [2, {'skipBlankLines': true}],
    // Must always modify loops to prevent infinite looping
    'no-unmodified-loop-condition': 2,
    // Disallows ternary operators when unneccesary
    'no-uneeded-ternary': 2,
    'no-unused-expressions': 2,
    // No empty `constructor()` in classes
    'no-useless-constructor': 2,
    // Cannot use the `with` statement
    'no-with': 2,
    'object-shorthand': [2, 'always'],
    // Disallows multiple variable declarations on one line
    'one-var-declaration-per-line': 2,
    'prefer-arrow-callback': 2,
    'prefer-const': 2,
    'prefer-rest-params': 2,
    'prefer-spread': 2,
    'prefer-template': 2,
    // Only use single quotes and backticks except for when the string itself contains single quotes
    'quotes': [2, 'single', {'avoidEscape': true, 'allowTemplateLiterals': true}],
    // Enforces `key` prop on iterable React elements
    'react/jsx-key': 2,
    'react/jsx-max-props-per-line': [2, {'maximum': 4}],
    'react/jsx-no-duplicate-props': [2, {'ignoreCase': true}],
    // Always leave a space before closing JSX tag: use `<Hello />`, not `<Hello/>
    'react/jsx-space-before-closing': [2, 'always'],
    'react/no-did-mount-set-state': 2,
    'react/no-did-update-set-state': 2,
    'react/no-direct-mutation-state': 2,
    'react/no-is-mounted': 2,
    'react/no-unknown-property': 2,
    'semi': [2, 'always'],
    'spaced-comment': [2, 'always'],
    'strict': [2, 'global'],
    'yoda': [2, 'always']
  }
};
