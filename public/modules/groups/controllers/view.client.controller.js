'use strict';

angular.module('groups').controller('GroupsController', ['$scope', '$http', '$location', 'Authentication',
 function ($scope, $http, $location, Authentication) {

        $scope.authentication = Authentication;

        $scope.getGroups = function () {
            $http.get('/groups').success(function (response) {
                $scope.groups = response;
            }).error(function (response) {
                $scope.error = response.message;
            });
        };

        //If user is signed in then redirect back home
        if (!$scope.authentication.user) {
            $location.path('/');
        } else {
            $scope.getGroups();
        }

 }
]);
