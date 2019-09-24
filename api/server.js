const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// import routers 
const authRouter = require('../auth/auth-router.js');
const volunteerRouter = require('../routes/volunteers/volunteer-router');
const caseRouter = require('../routes/cases/cases-router');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

//custom middleware 
server.use(logger)

// use routers 
server.use('/api/auth', authRouter);
server.use('/api/cases', caseRouter)
server.use('/api/volunteers', volunteerRouter)

server.get('/', (req, res) => {
    res.send(`<h2>Welcome to Miracle Messages!</h2>`)
});


// custom middleware 
function logger(req, res, next) {
    console.log(
        `[${new Date().toISOString()}] ${req.method} from ${req.url}`
    ); 

    next(); 
};  

module.exports = server;
