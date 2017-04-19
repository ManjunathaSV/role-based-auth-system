const request = require('supertest');
const express = require('express');

const app = require('../app');

/**test for checkaccess**/
describe('GET /checkaccess', function() {
  it('repsond true if the user is allowed to access the resource based on access type', function(done) {
    request(app)
      .get('/checkAccess?userName=user3&resourceName=resource2&accessType=r')
      .set('Accept', 'text')
      .expect('true')
      .expect(200, done);
  });
  it('repsond false if the user is not allowed to access the resource based on access type', function(done) {
    request(app)
      .get('/checkAccess?userName=user3&resourceName=resource2&accessType=w')
      .set('Accept', 'text')
      .expect('false')
      .expect(200, done);
  });
});