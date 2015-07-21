/* global describe, it, expect */

import _ from 'underscore';
import {Store} from 'lib/main.js';

describe("fl-store", function () {

  it("should exist", function () {
    expect(Store).to.be.ok();
    expect(Store).to.be.an('object');
  });

  it("should be extendable", function () {
    var MyStore = _.extend({}, Store, {});

    expect(MyStore.emitChange).to.be.a('function');
    expect(MyStore.addChangeListener).to.be.a('function');
    expect(MyStore.removeChangeListener).to.be.a('function');
  });

});
