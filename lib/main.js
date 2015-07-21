import {on, emit, removeChangeListener} from './events.js';

var CHANGE_EVENT = 'change';

export var Store = {
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
