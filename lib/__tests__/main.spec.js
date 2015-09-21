/* global describe, it */

var expect = require('expect.js');
var objectAssign = require('object-assign');

var Store = require('../main.js').Store;

describe("fl-store", function () {

  it("should exist", function () {
    expect(Store).to.be.ok();
    expect(Store).to.be.an('object');
  });

  it("should be extendable", function () {
    var MyStore = objectAssign({}, Store, {});

    expect(MyStore.emitChange).to.be.a('function');
    expect(MyStore.addChangeListener).to.be.a('function');
    expect(MyStore.removeChangeListener).to.be.a('function');
  });
});
