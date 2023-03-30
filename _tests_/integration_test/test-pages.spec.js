/* eslint-disable no-undef */
const { expect } = require('chai');
const request = require('request');

describe('Status and content', () => {
  describe('Main page', () => {
    it('status', (done) => {
      request('http://localhost:3333/', (error, response) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('content', (done) => {
      request('http://localhost:3333/', (error, response, body) => {
        expect(body).to.equal('Welcome to CI/CD  POC!');
        done();
      });
    });
  });

  describe('About page', () => {
    it('status', (done) => {
      request('http://localhost:3333/about', (error, response) => {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });
});
