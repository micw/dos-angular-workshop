(function() {
    'use strict';

    angular.module('HeiseApp',["ngRoute"]);

    angular.module('HeiseApp').config(Config);

    Config.$inject=["$routeProvider"]
    function Config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'overview.html'
            })
            .when('/news', {
                templateUrl: 'news.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }

    angular.module('HeiseApp').filter('rawHtml', ['$sce', function($sce){
        return function(val) {
            return $sce.trustAsHtml(val);
        };
    }]);

})();