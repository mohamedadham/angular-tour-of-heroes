'use strict';

/**
 * @ngdoc function
 * @name angularTourOfHeroesApp.controller:DetailsCtrl
 * @description
 * # DetailsCtrl
 * Controller of the angularTourOfHeroesApp
 */
angular.module('angularTourOfHeroesApp')
  .controller('DetailsCtrl', ['heroes', function (heroes) {
    this.heroe=heroes.getHeroes();
    this.selectedHeroe=heroes.getHeroee();

   
  }]);
