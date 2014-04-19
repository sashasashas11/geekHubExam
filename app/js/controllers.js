var geekHubControllers = angular.module('geekHubControllers', []);

geekHubControllers.controller('GoodsListCtrl', ['$scope', 'Goods',
    function($scope, Goods) {
        $scope.data = Goods.query();

        $scope.brands = ["GoPro", "DOD", "Aspiring", "Globex", "Falcon"];

        $scope.filter = { brand: [] }

    }]);
