/* eslint-disable no-undef */
const { expect } = require('chai');
const srvc = require('../../app/service');

describe('Main test', function() {
    it('Should test', function(done){
        const formatedDate = srvc.getCurrentDateFormated(796089600000);
        expect(formatedDate).to.equal("March 24, 1995 - 09:00:00");
        done();
  });
});