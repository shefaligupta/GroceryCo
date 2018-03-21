'use strict';

// Declare app level module which depends on views, and components
var shoppingApp = angular.module('myApp', [
  'ngRoute'
]);

shoppingApp.config(['$locationProvider', '$routeProvider',
    function($locationProvider, $routeProvider) {
        $routeProvider.
        when('/cart', {
            templateUrl: 'view1/view1.html',
            controller: View1Ctrl
        }).
        otherwise({redirectTo: '/cart'});
}]);

/**
 * Prevent user from typing more than maximum allowed quantity in input box.
 */
shoppingApp.directive("limitToMax", function() {
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
            });
        }
    };
});

/**
 * Factory used for retrieving the inventory items from the JSON file
 */
shoppingApp.factory("RetrieveProducts",function($http, $q){

    var myStore;
    var defer = $q.defer();

    $http.get('json/items.json').success(function(response) {

        defer.resolve(new Store(response.items));
    });

    return defer.promise;
});