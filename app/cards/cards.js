'use strict';

angular.module('myApp.cards', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cards', {
    templateUrl: 'cards/cards.html',
    controller: 'CardsCtrl'
  });
}])

.controller('CardsCtrl', ['$scope','$http', function($scope, $http) {
  $http({
      method: 'GET',
      url: 'contact.json'
   }).then(function (response){
      $scope.contact = response.data;

   },function (error){

   });


}]);
