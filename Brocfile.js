var ES6Modules = require('broccoli-es6modules');

var tree = 'lib';

tree = new ES6Modules(tree, {
  format: 'cjs',
  bundleOptions: {
    entry: 'main.js',
    name: 'fl-store'
  },
  esperantoOptions: {
    strict: true
  }
});

module.exports = tree;

