# fl-store [![Build Status](https://travis-ci.org/danjamin/fl-store.svg)](https://travis-ci.org/danjamin/fl-store)

re-usable store for fluxlike applications

## USE

### install

Note: this is still in development and not registered to **npm** or **bower** yet.
      So keep this in mind and install via the Git URL for now.

via [bower](http://bower.io):

```sh
$ bower install --save https://github.com/danjamin/fl-store.git#0.1.2
```

OR via [npm](http://npmjs.com):

```sh
$ npm install --save https://github.com/danjamin/fl-store.git#0.1.2
```

### example

Create a store:

```js
// MyStore.js

import _ from 'underscore';

import AppDispatcher from '../dispatcher/AppDispatcher.js';
import {Store} from 'fl-store';

// Note: if using common JS you might have:
// var Store = require('fl-store').Store;

var MyStore = _.extend({}, Store, {
  // ...
});

MyStore.dispatchToken = AppDispatcher.register(function (action) {
  switch (action.type) {
    case 'SOMETHING':
      // respond to this action here ...

      // then emit change to everyone listening:
      MyStore.emitChange();
      break;

    default:
      // do nothing
  }
});

export default MyStore;
```

Register a view to your store:

```js
// MyView.js

import React from 'react';
import MyStore from '../stores/MyStore.js';

export default React.createClass({
  // ...

  componentWillMount: function () {
    // add change listener to MyStore when component will mount
    MyStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    // remove change listener from MyStore after component unmounted
    MyStore.removeChangeListener(this._onChange);
  },

  render: function () {
    // ...
  },

  // ...

  _onChange: function () {
    // ...
  }
});
```

## DEVELOP

### install dependencies

```sh
$ npm install
$ bower install
```

### linting

```sh
$ npm run lint
```

### testing

```sh
$ npm test
```

### building

```sh
$ npm run build
```

update bower.json and package.json versions tag semver and push to origin

### todo

- [ ] clean up code
- [ ] Add more unit tests
- [ ] Bring in flow
- [x] Setup travis CI
