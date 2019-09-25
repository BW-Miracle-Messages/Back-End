const db = require('../../data/db-config')
const Volunteers = require('./volunteer-model')
const server = require('../../api/server')
const request= require('supertest')




describe('volunteer-model.js tests', () => {
    // wait for the database to be reset 
    beforeEach(async () => {
        await db('volunteers').truncate();
    });

            //tested & working
    describe('add()', () => {
        it('should add the new volunteer to the db', async () => {
            
            // adding 2 users to the database 
            await Volunteers.add({ volunteer_name: 'Yakuana Davis', password: 'pass'});
            await Volunteers.add({ volunteer_name: 'Jay Davis', password: 'pass' });
            // get users array from db 
            let volunteers = await db('volunteers');
            // added kuana and jay (2 users) to empty table 
            expect(volunteers).toHaveLength(2);
        });

                //tested & passing 
        it('should find volunteer in database by the volunteer_name', async () => {
            // added a new user 
            await Volunteers.add({ volunteer_name: 'Mykol', password: 'pass'});
            // look for the added user 
            let volunteers = await db('volunteers')
                .where({ volunteer_name: 'Mykol' })
                .first();
            // check if the username is in the db 
            expect(volunteers.volunteer_name).toBe('Mykol');
        });

                    //tested & working 
        it("should return a 404 status code when name is forgotten is forgotten", async () => {
            const response = await request(server)
              .post("/volunteers")
              .send({ family_name: '' });
            expect(response.status).toEqual(404);
          });
         });
    });



