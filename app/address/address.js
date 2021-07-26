'use strict';

angular.module('myApp.address', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/address', {
    templateUrl: 'address/address.html',
    controller: 'AddressCtrl'
  });
}])

.controller('AddressCtrl', ['$scope','$http', function($scope, $http) {
  $http({
      method: 'GET',
      url: 'contact.json'
   }).then(function (response){
      $scope.contact = response.data;

   },function (error){

   });
   $scope.showMe = function(){
   $scope.show=true;
         }
  $scope.hideMe = function(){
  $scope.show=false;
         }

}]);
