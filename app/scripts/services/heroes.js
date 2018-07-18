'use strict';

/**
 * @ngdoc service
 * @name angularTourOfHeroesApp.heroes
 * @description
 * # heroes
 * Service in the angularTourOfHeroesApp.
 */
angular.module('angularTourOfHeroesApp')
  .service('heroes', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.heroes=[
        {id:11,name:'Mr.Nice'},
        {id:12,name:'Narco'},
        {id:13,name:'Bombasto'}
        
    ];
    
    this.getHeroes=function(){
        return this.heroes;
    }
     var count=0;
    this.addHeroe=function(name){
       
        count++;
        var nheroe={id:13+count,name:name};
        this.heroes.push(nheroe);
    }
    
    this.removeHeroe=function(heroe){
        var index=this.heroes.indexOf(heroe);
        this.heroes.splice(index,1);
      
    }
    var vm=this;
    var heroe2;
    
    this.setHeroe=function(selected){
   
        heroe2=selected;
       console.log(heroe2);
      
       
    }
//    this.output=function(){
//         console.log(heroe2);
//    }
   
    
     this.getHeroee=function(){
            return heroe2;
         
        }
  });
