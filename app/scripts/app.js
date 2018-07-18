'use strict';

/**
 * @ngdoc overview
 * @name angularTourOfHeroesApp
 * @description
 * # angularTourOfHeroesApp
 *
 * Main module of the application.
 */
angular
  .module('angularTourOfHeroesApp', ['ui.router'])
    .config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/');
        $stateProvider
        .state('home',{
            url:'/',
            templateUrl:'views/dashboard.html',
            controller:'TopheroesCtrl as top'
        })
        .state('details',{
            url:'/details',
            templateUrl:'views/details.html',
            controller:'DetailsCtrl as details'
        })
        .state('list',{
            url:'/list',
            templateUrl:'views/list.html',
            controller:'ListCtrl as list'
        })
        
        
    }])
