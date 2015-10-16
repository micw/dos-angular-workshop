(function() {
   'use strict';

    angular.module('HeiseApp').controller("NewsController",NewsController);

    NewsController.$inject=["$location","HeiseNewsService"]; // Hier können die Namen der Dependencies definiert werden
    function NewsController($location, heiseNewsService, $routeParams) {
        this.$routeParams = $routeParams;
        var _scope=this;

        heiseNewsService.getNews($location.search().url).then(function(response) {
            _scope.news=response.data;
            console.log(response.data);
        });

        this.navigateTo=function(item) {
            $location.path("/news");
            $location.search({"url": item.link.url});
        }
    }

})();