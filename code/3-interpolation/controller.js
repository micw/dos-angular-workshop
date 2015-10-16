(function() {
   'use strict';

    angular.module('devopenspace').controller("WorkshopController",WorkshopController);

    WorkshopController.$inject=["$interpolate"]; // Hier können die Namen der Dependencies definiert werden
    function WorkshopController(interpol) {
        this.name="Test";
        this.ip=interpol('{{ name | uppercase }}');
        this.welcome=this.ip(this);
    }

})();