/* global describe, it, expect */

import expect from 'expect.js';
import objectAssign from 'object-assign';

import {Store} from '../main.js';

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
    expect(MyStore.serialize).to.be.a('function');
  });

  it("should throw serialize and deserialize not implemented", function () {
    var MyStore = objectAssign({}, Store, {});

    expect(MyStore.serialize).to.throwError();
  });
});

