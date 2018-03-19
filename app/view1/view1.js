'use strict';

var app = angular.module('myApp.view1', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cart', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}]);

app.controller('View1Ctrl', ['$scope', '$http', function($scope, $http) {

  $scope.items = [];
  $scope.cartItems = [];

  $http.get('items.json').success(function(response)
  {
      $scope.items = response.items;
  });

  $scope.addItem = function(item) {
    item.quantity += 1;
    $scope.updateCart(item,'add');
  };

  $scope.removeItem = function(item) {
    item.quantity -= 1;
    $scope.updateCart(item,'remove');
  };

  $scope.updateCart = function(item,action){
    var found = false;
    if(item.quantity >= 0){
      for(var i=0;i<$scope.cartItems.length; i++){
        if($scope.cartItems[i].name === item.name){
          found = true;
          if(action === 'add'){
              $scope.cartItems[i].quantity = item.quantity;
          }
          else if(action === 'remove'){
              $scope.cartItems[i].quantity = item.quantity;
              if($scope.cartItems[i].quantity === 0){
                  $scope.cartItems.splice(i,1);
              }
          }
        }
      }
      if(!found){
        $scope.cartItems.push(item);
      }
    }
  };
}]);

app.directive("limitToMax", function() {
    return {
        link: function(scope, element, attributes) {
            element.on("keydown keyup", function(e) {
                if (Number(element.val()) > Number(attributes.max) &&
                    e.keyCode != 46 // delete
                    &&
                    e.keyCode != 8// backspace
                ) {
                    e.preventDefault();
                    element.val(attributes.max);
                }
                else if(isNaN(element.val())){
                    e.preventDefault();
                    element.val(0);
                }
            });
        }
    };
});