
describe('angularjs homepage', function () {
    xit('should greet the named user', function () {
        browser.get('http://www.angularjs.org');

        element(by.model('yourName')).sendKeys('Abhishek');

        var greeting = element(by.binding('yourName'));

        expect(greeting.getText()).toEqual('Hello Abhishek!');
    });
});
xdescribe('clock page', function () {
    it('should display name of the user', function () {
        browser.get('http://localhost:57051/App/1.DataBinding/Clock/Clock.html');

        var greeting = element(by.binding('name'));
        expect(greeting.getText()).toEqual('Abhishek Jain');
    });

    it("should change the time every second", function () {
        browser.get('http://localhost:57051/App/1.DataBinding/Clock/Clock.html');
        var mockEvents = {};
        var ctrl = $controllerConstructor("ClockController", { $scope: scope });

        var initialDate = new Date(2014, 3, 3).getTime();
        // set the clock to this date
        var clock = sinon.useFakeTimers(initialDate);
        scope.clock.now = new Date(2014, 3, 3);
        expect(scope.clock.now).toBe("Thu Apr 03 2014 00:00:00 GMT+0100");
    });
});