const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// import routers 
const authRouter = require('../auth/auth-router.js');
const caseRouter = require('../routes/cases/cases-router')

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

// use routers 
server.use('/api/auth', authRouter);
server.use('/api/cases', caseRouter)

server.get('/', (req, res) => {
    res.send(`<h2>Welcome to Miracle Messages!</h2>`)
});

module.exports = server;
