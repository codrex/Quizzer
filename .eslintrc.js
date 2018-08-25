module.exports = {
  globals: {
    document: true,
    window: true,
    shallow:true,
    mount: true
  },

  "env": {
    "node": true,
    "es6": true,
    "mocha": true,
    "jest": true
},
  parser: 'babel-eslint',
  extends: 'airbnb',
  rules:{
    "react/jsx-filename-extension": "0"
  }
};
