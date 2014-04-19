var geekHubServices = angular.module('geekHubServices', ['ngResource']);

geekHubServices.factory('Goods', ['$resource',
    function($resource) {
        return $resource('data/data.json', {}, {
//            query: {method:'GET', params:{id:'data'}, isArray:true}
        });
    }]);