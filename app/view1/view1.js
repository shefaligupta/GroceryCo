'use strict';

function View1Ctrl($scope, $http,RetrieveProducts) {

  RetrieveProducts.then(function(response){
    $scope.store = response;
  });


}