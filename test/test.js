var request = require('supertest');
var app = require('../index.js');
describe('GET /', function() {
 it('respond with hello1 world', function(done) {
 //navigate to root and check the the response is "hello world"
 request(app).get('/').expect('hello1 world', done);
 });
});
