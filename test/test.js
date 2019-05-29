var request = require('supertest');
var app = require('../index.js');
describe('GET /', function() {
 it('respond with Greeting message', function(done) {
 //navigate to root and check the the response is "hello world"
 request(app).get('/').expect('Lets confirm with @OTS. Again', done);
 });
});
