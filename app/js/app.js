var geekHubApp = angular.module('geekHubApp', [
    'ngRoute',
    'geekHubControllers',
    'geekHubServices'
]);

geekHubApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
                when('/goods', {
                    templateUrl: 'app/templates/goods-list.html',
                    controller: 'GoodsListCtrl'
                }).
                otherwise({
                    redirectTo: '/goods'
                });
    }]);

