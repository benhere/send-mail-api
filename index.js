require('dotenv').config();
require('express-async-errors');

const express = require('express');
const server = express();

const sendEmail = require('./controllers/sendEmailApi')

// error handler middleware
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

server.use(express.json());

// home route
server.get('/', (req,res) => {
    res.send('<h1>Email Project</h1> <a href="/send">send email</a>')
})

server.get('/send', sendEmail);

server.use(notFoundMiddleware);
server.use(errorHandlerMiddleware);

const portNo = process.env.PORT || 7373;

const start = async () => {
    try {
        server.listen(portNo, () => {
            console.log(`Server is listening on port: ${portNo}...`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();
