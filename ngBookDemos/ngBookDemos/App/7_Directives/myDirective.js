var app = angular.module("myApp", [])
    .directive("myDirective", function () {
        return {
            restrict: "EAC",
            replace: true,
            template: '<div><a href="http://google.com" target="_blank">Click me to go to Google</a></div>'
        };
    })
    .directive("mySecondDirective", function ($log) {
        return {
            restrict: "A",
            scope: {
                myUrl: "@",
                myText: "@"
            },
            replace: true,
            template: '<div><a href=http://{{myUrl}} target="_blank">{{myText}}</a></div>',
            controller: function($scope) {
                $log.info($scope.myUrl);
            }
        };
    });