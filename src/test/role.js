const request = require('supertest');
const express = require('express');

const app = require('../app');
/**All the roles in the system**/
describe('GET /roles', function() {
  it('respond with json', function(done) {
    request(app)
      .get('/roles')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
