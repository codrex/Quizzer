module.exports = {
  globals: {
    document: true,
    window: true,
    shallow: true,
    mount: true,
    DOMParser: true
  },

  env: {
    node: true,
    es6: true,
    mocha: true,
    jest: true
  },
  parser: 'babel-eslint',
  extends: 'airbnb',
  rules: {
    'react/jsx-filename-extension': '0',
    'import/prefer-default-export': '0'
  }
};
