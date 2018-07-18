'use strict';

/**
 * @ngdoc function
 * @name angularTourOfHeroesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTourOfHeroesApp
 */
angular.module('angularTourOfHeroesApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    this.title='Tour of Heroes';
  });
