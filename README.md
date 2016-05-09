# My eslint rules!

A set of rules I've adopted to keep my code sane. Gotta love those single quotes and semicolons ;)


### Install package:
`npm i -D eslint-config-johnnyji`

### Install dependencies:
`npm i -D eslint-config-johnnyji eslint eslint-plugin-react eslint-plugin-babel babel-eslint`

### NOTE: There is an error with `babel-eslint`, see: https://github.com/AtomLinter/linter-eslint/issues/459
This will break linting in editors views such as Sublime Text or VIM.
In order to solve this, install `babel-eslint` globally:

`npm i -g babel-eslint`

### `.eslintrc.js` configuration:
Create a `.eslintrc.js` file in the root of the project directory:
```javascript
// .eslintrc.js

module.exports = {
  extends: require.resolve('./node_modules/eslint-config-johnnyji/index.js')
}; 
```

#### Happy Linting ;)
