'use strict';

// Setting up route
angular.module('groups').config(['$stateProvider',
 function ($stateProvider) {
        // Groups state routing
        $stateProvider.
        state('groups', {
            url: '/groups',
            templateUrl: 'modules/groups/views/view.client.view.html'
        }).
        state('groups-create', {
            url: '/groups/create',
            templateUrl: 'modules/groups/views/create.client.view.html'
        });
 }
]);
