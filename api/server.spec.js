const request = require('supertest')
const server = require('./server')



describe('server', () => {
    //are we in the right ebnvironment? --tested & working
    it('should set the testing environment', () => {
        expect(process.env.DB_ENV).toBe('testing')
    })

    describe('endpoint', () => {
        describe('GET /', () => {
                                        //tested & working
            it('should return 200 ok using async/await THE SQUAD', async() => {
                const res = await request(server).get('/');
                expect(res.status).toBe(200);
            })
           

            it('should return JSON', async() => {
                const res = await request(server).get('/')
                expect(res.type).toBe('text/html')
            }) 

            })
        
        })

    })

