(function() {
   'use strict';

    angular.module('devopenspace',[]);

    angular.module('devopenspace').controller("WorkshopController",
        ["$scope",WorkshopController]);

    function WorkshopController($scope) {
        $scope.welcome="Bienvenidos en Leipzig";
    }

})();