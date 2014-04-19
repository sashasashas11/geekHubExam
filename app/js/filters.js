var geekHubFilter = angular.module('geekHubFilter', []);

geekHubFilter.filter('goodsFilter', function () {
    return function (items, filter) {
        var filtered = [];

        if (filter.brand.length != 0 && filter.brand.length != undefined) {
            angular.forEach(filter.brand, function (brand) {
                var productBrand = brand;
                angular.forEach(items, function (item) {
                    if (item.brand == productBrand)
                        filtered.push(item);
                })
            });
        }
        else return items;

        return filtered;
    }
})
