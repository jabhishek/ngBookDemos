var app = angular.module("clockApp", []);

app.controller("ClockController", ["$scope", "$interval", "$filter", function ($scope, $interval, $filter) {
    $scope.name = "Abhishek Jain";
    $scope.clock = {
        now: new Date()
    };
    var updateClock = function () {
        $scope.clock.now = new Date()
    };
    $interval(function () {
        updateClock();
    }, 1000);
}]);