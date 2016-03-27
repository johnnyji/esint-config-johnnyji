# My eslint rules!

A set of rules I've adopted to keep my code sane. Gotta love those single quotes and semicolons ;)


### Installation

Install as a dev dependency:
`npm i -D eslint-config-johnnyji`


Install eslint dependencies: 
`npm i -D eslint eslint-plugic-react eslint-plugin-babel`


Create a `.eslintrc.js` file in the root of the project directory:
```javascript
// .eslintrc.js

module.exports = {
  extends: './node_modules/eslint-config-johnnyji/index.js' 
}; 
```


#### Happy Linting!
