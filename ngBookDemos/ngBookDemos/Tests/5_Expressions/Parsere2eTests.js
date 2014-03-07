

xdescribe('Parser page', function () {
    it('should evaluate the expression', function () {
        browser.get('http://localhost:57051/App/5_Expressions/Parser.html');
        element(by.model('expr')).sendKeys('1 + 1');
        var result = element(by.binding('result'));
        expect(result.getText()).toEqual('2');
    });
});