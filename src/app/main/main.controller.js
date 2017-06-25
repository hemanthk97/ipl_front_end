(function() {
  'use strict';

  angular
    .module('ipl')
    .controller('MainController', MainController)
    .controller('livesimulation', livesimulation)
    .filter('pages', startFrom)
    .factory('myService',myService)


function livesimulation($http,myService){
  var vm = this;
  $http.get("http://localhost:3000/data/577.json").then(function(result){
   vm.livescore = result.data;
  })

setTimeout(function(){
  var over1 = true;
  var over2 = true;
  var over3 = true;
  var over4 = true;
  var over5 = true;
  var over6 = true;
  vm.livescore.forEach(function(element,index) {
    setTimeout(function(){
    if(element.over == "1"){
      if (over1){
      $('.add-remove').append('<div class="over">over 1</div>');
      $('.add-remove').append('<div class="ball item">'+element.total_runs+'</div>');
      over1 = false
      }
      else{
        $('.add-remove').append('<div class="ball item">'+element.total_runs+'</div>');
      }
    }
    if(element.over == "2"){
      if (over2){
      $('.add-remove').append('<div class="over">over 2</div>');
      $('.add-remove').append('<div class="ball item">'+element.total_runs+'</div>');
      over2 = false
      }
      else{
        $('.add-remove').append('<div class="ball item">'+element.total_runs+'</div>');
      }
    }
    if(element.over == "3"){
      if (over3){
      $('.add-remove').append('<div class="over">over 3</div>');
      $('.add-remove').append('<div class="ball item">'+element.total_runs+'</div>');
      over3 = false
      }
      else{
        $('.add-remove').append('<div class="ball item">'+element.total_runs+'</div>');
      }
    }
    if(element.over == "4"){
      if (over4){
      $('.add-remove').append('<div class="over">over 4</div>');
      $('.add-remove').append('<div class="ball item">'+element.total_runs+'</div>');
      over4 = false
      }
      else{
        $('.add-remove').append('<div class="ball item">'+element.total_runs+'</div>');
      }
    }
  },index*50000)
  });
},1000)
}
  /** @ngInject */
  function MainController($http,myService) {
   var vm = this;
   vm.pageSize = 6;
   vm.currrentPage = 1;
   vm.detailsss = true;
   vm.del = "";
   vm.seasons =""
   vm.detailedinfo = false;
   getMatches($http,vm,myService);
   vm.detailball = function(ball){
     vm.balldet = ball
   }




   vm.seasonselection = function(sea){
    vm.matches = findBySpecField(vm.seasons,"season",sea);
   }
   vm.isact = function(event,team,batting){
       if(!$(event).hasClass('isactive')){
       $('.team1').removeClass('isactive')
       $('.team2').removeClass('isactive')
       $(team).addClass('isactive')
       vm.batting = findBySpecField(vm.del,"batting_team",batting)
       vm.over1 = findBySpecField(vm.batting,"over","1")
       vm.over2 = findBySpecField(vm.batting,"over","2")
       vm.over3 = findBySpecField(vm.batting,"over","3")
       vm.over4 = findBySpecField(vm.batting,"over","4")
       vm.over5 = findBySpecField(vm.batting,"over","5")
       vm.over6 = findBySpecField(vm.batting,"over","6")
       vm.over7 = findBySpecField(vm.batting,"over","7")
       vm.over8 = findBySpecField(vm.batting,"over","8")
       vm.over9 = findBySpecField(vm.batting,"over","9")
       vm.over10 = findBySpecField(vm.batting,"over","10")
       vm.over11 = findBySpecField(vm.batting,"over","11")
       vm.over12 = findBySpecField(vm.batting,"over","12")
       vm.over13 = findBySpecField(vm.batting,"over","13")
       vm.over14 = findBySpecField(vm.batting,"over","14")
       vm.over15 = findBySpecField(vm.batting,"over","15")
       vm.over16 = findBySpecField(vm.batting,"over","16")
       vm.over17 = findBySpecField(vm.batting,"over","17")
       vm.over18 = findBySpecField(vm.batting,"over","18")
       vm.over19 = findBySpecField(vm.batting,"over","19")
       vm.over20 = findBySpecField(vm.batting,"over","20")
       }
   }
   vm.showDetails = function(id,winner,team1,team2){
     vm.team1 = team1
     vm.team2 = team2
     vm.detailedinfo = true;
     if (winner == team1){
       $('.team1').removeClass('isactive')
       $('.team2').removeClass('isactive')
        $(".team1").addClass('isactive')
        vm.trophy1 = true
        vm.trophy2 = false
     }else {
       $('.team1').removeClass('isactive')
       $('.team2').removeClass('isactive')
       $(".team2").addClass('isactive')
       vm.trophy1 = false
       vm.trophy2 = true
     }


   $http.get("http://localhost:3000/data/"+id+".json").then(function(result){
      vm.del = result.data
      vm.batting = findBySpecField(vm.del,"batting_team",winner)
      vm.over1 = findBySpecField(vm.batting,"over","1")
      vm.over2 = findBySpecField(vm.batting,"over","2")
      vm.over3 = findBySpecField(vm.batting,"over","3")
      vm.over4 = findBySpecField(vm.batting,"over","4")
      vm.over5 = findBySpecField(vm.batting,"over","5")
      vm.over6 = findBySpecField(vm.batting,"over","6")
      vm.over7 = findBySpecField(vm.batting,"over","7")
      vm.over8 = findBySpecField(vm.batting,"over","8")
      vm.over9 = findBySpecField(vm.batting,"over","9")
      vm.over10 = findBySpecField(vm.batting,"over","10")
      vm.over11 = findBySpecField(vm.batting,"over","11")
      vm.over12 = findBySpecField(vm.batting,"over","12")
      vm.over13 = findBySpecField(vm.batting,"over","13")
      vm.over14 = findBySpecField(vm.batting,"over","14")
      vm.over15 = findBySpecField(vm.batting,"over","15")
      vm.over16 = findBySpecField(vm.batting,"over","16")
      vm.over17 = findBySpecField(vm.batting,"over","17")
      vm.over18 = findBySpecField(vm.batting,"over","18")
      vm.over19 = findBySpecField(vm.batting,"over","19")
      vm.over20 = findBySpecField(vm.batting,"over","20")
     })
   }
}


function getMatches($http,vm,myService){
   $http.get("http://localhost:3000/data/matches.json").then(function(result){
       vm.seasons = result.data;
       vm.matches = findBySpecField(result.data,"season",2008);
   })
   $http.get("http://localhost:3000/data/577.json").then(function(result){
       myService.setJson(result.data);
   })
}

function findBySpecField(data, reqField, value, resField) {
   var container = data;
   var s = []
   for (var i = 0; i < container.length; i++) {
       if (container[i][reqField] == value) {
           s.push(container[i]);
       }
   }
   return s;
}

function startFrom(){
   return function(data,start){
       if (!data || !data.length) { return; }
       start = +start;
       return data.slice(start);
   }
}

 function myService(){
   var myjsonObj = null;//the object to hold our data
    return {
    getJson:function(){
      return myjsonObj;
    },
    setJson:function(value){
     myjsonObj = value;
    }
    }
}

})();
