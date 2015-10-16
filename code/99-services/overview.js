(function() {
   'use strict';

    angular.module('HeiseApp').controller("OverviewController",OverviewController);

    OverviewController.$inject=["$location","HeiseNewsService"]; // Hier können die Namen der Dependencies definiert werden
    function OverviewController($location, heiseNewsService, $routeParams) {
        this.$routeParams = $routeParams;
        var _scope=this;

        heiseNewsService.list().then(function(response) {
          _scope.streams=response.data.streams;
        });

        this.getUrl=function() {
            return $location.search().url;
        }

        this.navigateTo=function(item) {
            $location.path("/news");
            $location.search({"url": item.link.url});
        }
    }

})();