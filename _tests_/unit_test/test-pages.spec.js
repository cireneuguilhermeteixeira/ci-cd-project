var expect  = require('chai').expect;
const srvc = require('../../app/service');


describe ('Main test', function() {
    it('Should test', function(done){
        const formatedDate = srvc.getCurrentDateFormated("2023/03/24");
        expect(formatedDate).to.equal("March 24, 2023 - 12:00:00");
        done();
    });        
});