const request = require('supertest')
const server = require('../api/server')
const db = require('../data/db-config')
const Auth = require('./auth-router')



        //register --tested & working . 
describe('POST /register', function() {
    it('responds with json', function(done) {
        request(server)
        .post('/api/auth/register')
        .send({ volunteer_name: 'JP Morgan', password: 'pass'})
        .set('Accept', 'application/json')
        .expect(201)
        .end(function(err, res) {
            if (err) return done(err)
            done()
        })
    })  

        //login  tested & working
describe('POST /login', function() {
    it('responds with json', function(done) {
        request(server)
        .post('/api/auth/login')
        .send({ volunteer_name: 'JP Morgan', password: 'pass'})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
             if (err) return done(err);
             done();
            })
        })
            //tested & working 
describe('GET /volunteers', function() {
    it('responds with json', function(done) {
        request(server)
        .get('/')
        .auth('volunteer_name', 'password')
        .set('Accept', 'application/json')
        .expect('Content-Type', /text/)
        .expect(200, done);
            });
        });
    })
});
