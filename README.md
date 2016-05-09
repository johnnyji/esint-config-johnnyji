# My eslint rules!

A set of rules I've adopted to keep my code sane. Gotta love those single quotes and semicolons ;)


### Install package:
`npm i -D eslint-config-johnnyji`

### Install dependencies:
`npm i -D eslint-config-johnnyji eslint eslint-plugin-react eslint-plugin-babel babel-eslint`

### NOTE:
ESLint will sometimes have trouble finding `babel-eslint` or other modules when using `extends` in
your `eslintrc`. This can cause in-editor linting to not work properly. In order to avoid
this, it's best to also install any ESLint dependencies globally as well,

`npm i -g eslint-config-johnnyji eslint eslint-plugin-react eslint-plugin-babel babel-eslint`

### `.eslintrc.js` configuration:
Create a `.eslintrc.js` file in the root of the project directory:
```javascript
// .eslintrc.js

module.exports = {
  extends: require.resolve('./node_modules/eslint-config-johnnyji/index.js')
}; 
```

#### Happy Linting ;)
