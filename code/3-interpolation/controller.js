(function() {
   'use strict';

    angular.module('devopenspace').controller("WorkshopController",WorkshopController);

    WorkshopController.$inject=[]; // Hier können die Namen der Dependencies definiert werden
    function WorkshopController() {
        this.welcome="Bienvenidos en Leipzig";
        this.attendees=[
            { name: "Marco" },
            { name: "Anton" },
            { name: "Shungeng" },
            { name: "Michael" },
            { name: "Patrick" },
            { name: "Enrico" },
            { name: "Kim" },
            { name: "Rocco" },
            { name: "Alex" },
            { name: "Salvatore" },
            { name: "Stefan" }
        ];
    }

})();