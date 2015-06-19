/* global describe, it, expect, _ */

describe("fl-store", function () {

  var Store;

  it("should exist", function () {
    expect(fl).toBeDefined();
    expect(fl.Store).toBeDefined();

    Store = fl.Store;
  });

  it("should be extendable", function () {
    var MyStore = _.extend({}, Store, {});

    expect(MyStore.emitChange).toBeDefined();
    expect(MyStore.addChangeListener).toBeDefined();
    expect(MyStore.removeChangeListener).toBeDefined();
  });

});
