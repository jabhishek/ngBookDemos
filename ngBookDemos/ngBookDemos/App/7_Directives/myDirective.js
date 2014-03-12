var app = angular.module("myApp", [])
    .directive("myDirective", function () {
        return {
            restrict: "EAC",
            replace: true,
            template: '<div><a href="http://google.com" target="_blank">Click me to go to Google</a></div>'
        };
    });