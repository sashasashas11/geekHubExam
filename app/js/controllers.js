var geekHubControllers = angular.module('geekHubControllers', []);

geekHubControllers.controller('GoodsListCtrl', ['$scope', 'Goods',
    function($scope, Goods) {
        $scope.data = Goods.query();

        $scope.brands = ["GoPro", "DOD", "Aspiring", "Globex", "Falcon"];

        $scope.filter = { brand: [] }

//        Goods.save({"title":"GoPro HERO3+ Black Edition","price":6000,"brand":"GoPro","resolution":12})

    }]);
