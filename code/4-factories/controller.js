(function() {
   'use strict';

    angular.module('devopenspace').controller("WorkshopController",WorkshopController);

    WorkshopController.$inject=["WorkshopFactory"]; // Hier können die Namen der Dependencies definiert werden
    function WorkshopController(api) {
        this.welcome="Bienvenidos en Leipzig";
        this.attendees=api.getAllAttendees();
    }

})();