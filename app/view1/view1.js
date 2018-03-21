'use strict';

/**
 * This is the controller function binding data to view.
 * @param $scope
 * @param $http
 * @param RetrieveProducts (factory that returns a store object for further use).
 * @constructor
 */
function View1Ctrl($scope, $http, RetrieveProducts) {

  RetrieveProducts.then(function(response) {
    $scope.store = response;
  });

}
