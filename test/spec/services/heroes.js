'use strict';

describe('Service: heroes', function () {

  // load the service's module
  beforeEach(module('angularTourOfHeroesApp'));

  // instantiate service
  var heroes;
  beforeEach(inject(function (_heroes_) {
    heroes = _heroes_;
  }));

  it('should do something', function () {
    expect(!!heroes).toBe(true);
  });

});
