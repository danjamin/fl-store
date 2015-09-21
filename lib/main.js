var Events = require('./events.js');

var CHANGE_EVENT = 'change';

module.exports.Store = {
  emitChange: function () {
    // returns the number of invocations
    return Events.emit.call(this, CHANGE_EVENT);
  },

  addChangeListener: function (callback) {
    // return boolean, true if added, else false
    return Events.on.call(this, CHANGE_EVENT, callback);
  },

  removeChangeListener: function (callback) {
    // returns boolean, true if removed, else false
    return Events.removeChangeListener.call(this, CHANGE_EVENT, callback);
  }
};
