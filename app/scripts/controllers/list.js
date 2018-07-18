'use strict';

/**
 * @ngdoc function
 * @name angularTourOfHeroesApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the angularTourOfHeroesApp
 */
angular.module('angularTourOfHeroesApp')
  .controller('ListCtrl', ['heroes', function (heroes) {
    this.heroe=heroes.getHeroes();
    this.addHeroe=function(heroe){
        heroes.addHeroe(heroe);
      
    }
    this.saveHeroe=function(selected){
        heroes.setHeroe(selected);
   
    };
    this.removeHeroe=function(heroe){
        heroes.removeHeroe(heroe);
      
    }
  }]);
