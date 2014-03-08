

xdescribe('Parser page', function () {
    it('should evaluate the expression', function () {
        browser.get('http://localhost:57051/App/5_Expressions/interpolate.html');
        element(by.model('to')).sendKeys('a@b.com');
        element(by.model('emailBody')).sendKeys('Hi {{to}}');
        
        var result = element(by.binding('previewText'));
        expect(result.getText()).toEqual('Hi a@b.com');
    });
});