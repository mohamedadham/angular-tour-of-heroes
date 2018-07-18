'use strict';

/**
 * @ngdoc function
 * @name angularTourOfHeroesApp.controller:TopheroesCtrl
 * @description
 * # TopheroesCtrl
 * Controller of the angularTourOfHeroesApp
 */
angular.module('angularTourOfHeroesApp')
  .controller('TopheroesCtrl', ['heroes', function (heroes) {
    this.heroe=heroes.getHeroes();
    this.saveHeroe=function(selected){
        heroes.setHeroe(selected);
   
    };
      
  }]);
