(function() {
   'use strict';

    angular.module('devopenspace').factory("WorkshopFactory",WorkshopFactory);

    function WorkshopFactory() {
        var api={};
        api.getAllAttendees=function() {
            return [
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
            ]
        };
        return api;
    }

})();