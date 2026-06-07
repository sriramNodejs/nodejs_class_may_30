const express = require('express');
require('dotenv').config();

const winston = require('winston');

const app = express();
const PORT = process.env.PORT || 5000;


const {logger} = require('./winston-middleware')



app.get('/', (req, res) => {
    res.status(200).json({
        status: true,
        message: 'hello from server'
    })
})

app.get('/winston-logging', (req, res) => {

    logger.info('This is an info log message');

    res.status(200).json({
        status: true,
        message: 'hello from server',
        'response-data': 'this is the morgan logging api '
    })
})

app.get('/winston-logging-error', (req, res) => {
    throw new Error('this is a error')

    res.status(200).json({
        status: true,
        message: 'hello from server',
        'response-data': 'this is the morgan logging api '
    })
})

// global error handler 
app.use((err, req, res, next) => {
    logger.error(`Error: ${err.message}`); // Log the error message
    res.status(500).json({
        message: err.message || 'Internal Server Error'
    })
})


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));