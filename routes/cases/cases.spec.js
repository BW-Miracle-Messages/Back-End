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
                //tested and working
      it('should remove a case from the db', async() => {
               //needed to match model fn..doh! 
            await Cased.addCase({ 
            volunteer_id: 12, 
            homie_name: 'Minnie Mouse', 
            current_city: 'LA', 
            current_state: 'CA', 
            last_location: 'The House Of Mouse',
            hometown: 'Disney', 
            sensitive: false })

            const caser = await db('cases')
            console.log(caser);
            expect(caser).toHaveLength(1)

            const id = caser[0].id
                //needed to match model fn..doh! 
            await Cased.removeCase(id)
            const delCased = await db('cases');
            console.log(delCased)
            expect(delCased).not.toHaveLength(1)
        });


    })

})
 
