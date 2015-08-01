'use strict';

// Checks for existence of callbacks by name on this
// particular Store.
function callbacksExistByName(eventName) {
  return (typeof this._callbacks !== 'undefined' && this._callbacks.hasOwnProperty(eventName));
}

// "this" is the particular Store in question
// returns boolean -- true if callback added, else false
function on(eventName, callback) {
  var callbacks,
    index;

  // set the callbacks on this Store if not already present
  if (typeof this._callbacks === 'undefined') {
    this._callbacks = {};
  }

  // set the particular set of events by name (if not already present)
  if (!this._callbacks.hasOwnProperty(eventName)) {
    this._callbacks[eventName] = [];
  }

  callbacks = this._callbacks[eventName];

  // find index of callback
  index = callbacks.indexOf(callback);

  // if callback not present, then add it
  if (index === -1) {
    callbacks.push(callback);
    return true;
  }

  return false;
}

// "this" is the particular Store in question
// returns number, the number of callbacks invoked
function emit(eventName) {
  var callbacks,
    numInvocations = 0;

  // get out if no callbacks exist
  if (!callbacksExistByName.call(this, eventName)) {
    return numInvocations;
  }

  callbacks = this._callbacks[eventName];

  // invoke each callback by this name
  callbacks.forEach(function (callback) {
    callback();
    ++numInvocations;
  });

  return numInvocations;
}

// "this" is the particular Store in question
// returns boolean of whether or not callback was removed
function removeChangeListener(eventName, callback) {
  var callbacks,
    index;

  // get out if no callbacks exist
  if (!callbacksExistByName.call(this, eventName)) {
    return false;
  }

  callbacks = this._callbacks[eventName];

  // find index of callback
  index = callbacks.indexOf(callback);

  // if found, remove it
  if (index > -1) {
    callbacks.splice(index, 1);
    return true;
  }

  return false;
}

var CHANGE_EVENT = 'change';

var Store = {
  emitChange: function () {
    // returns the number of invocations
    return emit.call(this, CHANGE_EVENT);
  },

  addChangeListener: function (callback) {
    // return boolean, true if added, else false
    return on.call(this, CHANGE_EVENT, callback);
  },

  removeChangeListener: function (callback) {
    // returns boolean, true if removed, else false
    return removeChangeListener.call(this, CHANGE_EVENT, callback);
  }
};

exports.Store = Store;