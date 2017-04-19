const request = require('supertest');
const express = require('express');

const app = require('../app');
/**All the resources in the system*/
describe('GET /resources', function() {
  it('respond with json', function(done) {
    request(app)
      .get('/resources')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
