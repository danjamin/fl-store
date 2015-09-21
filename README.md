# fl-store [![Build Status](https://travis-ci.org/danjamin/fl-store.svg)](https://travis-ci.org/danjamin/fl-store)

re-usable store for fluxlike applications

## USE

### install

Note: this is still in development and not registered to **npm** yet.
      So keep this in mind and install via the Git URL for now.

```sh
$ npm install --save https://github.com/danjamin/fl-store.git#0.2.0
```

### example

Create a store:

```js
// MyStore.js

import objectAssign from 'object-assign';

import AppDispatcher from '../dispatcher/AppDispatcher.js';
import {Store} from 'fl-store';

// Note: if using common JS you might have:
// var Store = require('fl-store').Store;

var _data = {};

var MyStore = objectAssign({}, Store, {
  // ...

  serialize: function () {
    return JSON.stringify({ data: _data });
  },

  deserialize: function (serializedData) {
    var deserialized = JSON.parse(serializedData);

    if (deserialized.hasOwnProperty('data')) {
      _data = deserialized.data;
    }
  }
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
$ npm install -g jshint mocha babel
```

```sh
$ npm install
```

### linting

```sh
$ npm run lint
```

### testing

```sh
$ npm test
```

optionally you can filter the tests:

```sh
$ ./scripts/test fl-store
```

### publishing

For now:

update package.json version, tag semver, and push to origin
