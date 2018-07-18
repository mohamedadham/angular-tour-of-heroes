'use strict';

describe('Controller: TopheroesCtrl', function () {

  // load the controller's module
  beforeEach(module('angularTourOfHeroesApp'));

  var TopheroesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TopheroesCtrl = $controller('TopheroesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TopheroesCtrl.awesomeThings.length).toBe(3);
  });
});
