var app = angular.module("myApp", []);
(function (app) {
    app.controller("MyController", ["$scope", "$interpolate", function ($scope, $interpolate) {
        $scope.$watch('emailBody', function (body) {
            if (body) {
                var template = $interpolate(body);
                $scope.previewText =
                template({ to: $scope.to });
            }
        });
    }]);
}(angular.module("myApp")));