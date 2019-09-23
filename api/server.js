const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// import routers 
const authRouter = require('../auth/auth-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

// use routers 
server.use('/api/auth', authRouter);

server.get('/', (req, res) => {
    res.send(`<h2>Welcome to Miracle Messages!</h2>`)
});

module.exports = server;
