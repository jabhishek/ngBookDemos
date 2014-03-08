
angular.module("myApp", ["myApp.filters"]);

angular.module("myApp.filters", [])
    .filter("capitalizeFirst", function () {
        return function (input) {
            if (input.length) {
                input = input.toLowerCase();
                return input[0].toUpperCase() + input.slice(1);
            }
            return "";
        };
    })
    .filter("BlankIfNegative", function () {
        return function (input) {
            if (input && input < 0) {
                return "";
            }
            return input;
        };
    });



