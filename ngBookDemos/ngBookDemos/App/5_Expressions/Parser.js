var app = angular.module("parserApp", []);
(function (app) {
    app.controller("ParserController", ["$scope", "$parse", function ($scope, $parse) {
        $scope.$watch('expr', function(newValue, oldValue, scope) {
            if (newValue != oldValue) {
                var parseFun = $parse(newValue);
                scope.result = parseFun(scope);
            }
        });
    }]);
}(angular.module("parserApp")));