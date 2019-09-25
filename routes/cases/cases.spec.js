const Cased = require('./cases-model')
const db = require('../../data/db-config')
const request= require('supertest')
const server = require('../../api/server')


 describe('POST /cases endpoint', () => {
    describe('send()', () => {

        beforeEach(async() => {
        await db('cases').truncate(); //truncate clears db before each test 
    })

            //tested & works
    it("should return a 201 status code", async () => {
        const response = await request(server)
          .post("/api/cases")
          .send({ volunteer_id: 11, 
            homie_name: 'Mickey Mouse', 
            current_city: 'LA', 
            current_state: 'CA', 
            last_location: 'The House Of Mouse',
            hometown: 'Disney', 
            sensitive: false});
            expect(response.status).toEqual(201);
      });

    })

})
 
