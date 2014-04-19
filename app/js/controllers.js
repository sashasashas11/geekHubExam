var geekHubControllers = angular.module('geekHubControllers', []);

geekHubControllers.controller('GoodsListCtrl', ['$scope', 'Goods',
    function($scope, Goods) {
        $scope.data = Goods.query();

    }]);
