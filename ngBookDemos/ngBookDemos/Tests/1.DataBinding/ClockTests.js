'use strict';

describe("Clock", function () {
    var scope, $controllerConstructor;

    beforeEach(module("clockApp"));

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        $controllerConstructor = $controller;
    }));
    it("should set the name of the user", function () {
        var mockEvents = {};
        var ctrl = $controllerConstructor("ClockController", { $scope: scope });

        expect(scope.name).toBe("Abhishek Jain"); 
    });
});