(function() {
    'use strict';

    var scope=function(value) {
        this.value=value;
        this.print=function() {
            console.log("Scope.value: "+value);
        }
    }

    var controller=function(scope) {
        scope.print();

    }

    var sc=new scope("Hello");

    controller(sc);
    console.log(controller);

    console.log(angular.injector().annotate(controller));

    console.log(angular.injector().annotate(['other',controller]));

    controller.$inject=["MyScope"];

    console.log(angular.injector().annotate(controller));

})();