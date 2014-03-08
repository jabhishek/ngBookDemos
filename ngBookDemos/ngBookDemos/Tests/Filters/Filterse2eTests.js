

describe('Filters page', function () {
    var result, input;
    beforeEach(function() {
        browser.get('http://localhost:57051/App/6_Filters/filters.html');
    });
    it('should capitalize the first letter of the word', function () {
        var input = element(by.model('inputString'));
        
        input.sendKeys('abhi');
        result = element(by.id('result'));
        expect(result.getText()).toEqual('Abhi');

        input.clear();
        input.sendKeys('ABHI');
        result = element(by.id('result'));
        expect(result.getText()).toEqual('Abhi');
    });
});