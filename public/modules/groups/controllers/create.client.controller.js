'use strict';

angular.module('groups').controller('GroupsCreateController', ['$scope', '$http', '$location', 'Authentication',
 function ($scope, $http, $location, Authentication) {

        $scope.authentication = Authentication;

        //If user is signed in then redirect back home
        if (!$scope.authentication.user) $location.path('/');

        $scope.saveGroup = function () {
            $http.post('/groups/create', $scope.group).success(function (response) {
                // And redirect to the group page
                $location.path('/groups');
            }).error(function (response) {
                $scope.error = response.message;
            });
        };

 }
]);
