var geekHubApp = angular.module('geekHubApp', [
    'ngRoute',
    'checklist-model',
    'geekHubControllers',
    'geekHubServices',
    'geekHubFilter'
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

