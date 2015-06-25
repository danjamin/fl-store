var ES6Modules = require('broccoli-es6modules'),
  Funnel = require('broccoli-funnel');

var moduleName = 'FLStore',
  fileName = 'fl-store';

var tree = 'lib';

tree = new ES6Modules(tree, {
  format: 'umd',
  bundleOptions: {
    entry: 'main.js',
    name: moduleName
  },
  esperantoOptions: {
    strict: true
  }
});

tree = new Funnel(tree, {
  destDir: '',

  getDestinationPath: function(relativePath) {
    if (relativePath === moduleName + '.js') {
      return fileName + '.js';
    }

    return relativePath;
  }
});

module.exports = tree;