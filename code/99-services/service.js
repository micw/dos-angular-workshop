(function() {
   'use strict';

    angular.module('HeiseApp').factory("HeiseNewsService",HeiseNewsService);

    HeiseNewsService.$inject=["$http"]; // Hier können die Namen der Dependencies definiert werden
    function HeiseNewsService($http) {
        return {
            list: function() {
                return $http({
                    method: "GET",
                    url: "https://jsonp.afeld.me/?url=http://www.heise.de/newsticker/",
                    headers: {
                        "X-Export-Format": "json"
                    }
                })
            },
            getNews: function(uri) {
                return $http({
                    method: "GET",
                    url: "https://jsonp.afeld.me/?url=http://www.heise.de/"+uri,
                    headers: {
                        "X-Export-Format": "json"
                    }
                })
            }
        };
    }

})();