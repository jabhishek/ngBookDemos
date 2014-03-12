
var app = angular.module("myApp", [])
    .run(function($rootScope) {
        $rootScope.rootProperty = "root value";
    })
    .controller("ParentController", ["$scope", function($scope) {
        $scope.parentProperty = "parent property";
    }])
    .controller("ChildController", ["$scope", function ($scope) {
        $scope.childProperty = "child property";
        $scope.fullSentenceFromChild
            = 'Same $scope: We can access: ' +
                $scope.rootProperty + ' and ' +
                $scope.parentProperty + ' and ' +
                $scope.childProperty;
    }]);