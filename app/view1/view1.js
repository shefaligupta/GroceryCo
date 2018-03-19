'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cart', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$http',function($scope, $http) {

  $scope.items = [];
  $http.get('items.json').success(function(response)
  {
      $scope.items = response.items;
      $scope.items.forEach(function(item){
        item.quantity = 0;
      });
  });

  $scope.addItem = function(item){
    item.quantity = Math.min(item.quantity+1,item.max_quantity);
  };

  $scope.removeItem = function(item) {
    item.quantity = Math.max(item.quantity-1,0);
  };
}]);