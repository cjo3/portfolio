const setEslint = require('@colin30/configs/eslint')

module.exports = setEslint(true, ['plugin:react/recommended'], ['react'], {
  node: true,
  browser: true,
  jest: true
})