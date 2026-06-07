const express = require('express');
require('dotenv').config();
const morgan = require('morgan')

const fs = require('fs/promises');

const app = express();
const PORT = process.env.PORT || 5000;


// app.use(morgan('dev'));
app.use(morgan('combined'));


app.get('/', (req, res) => {
    res.status(200).json({
        status: true,
        message: 'hello from server'
    })
})

app.get('/mogran-logging', (req, res) => {
    res.status(200).json({
        status: true,
        message: 'hello from server',
        'response-data': 'this is the morgan logging api '
    })
})

// global error handler 
app.use((err, req, res, next) => {
    console.log('global error handler hitting')
    res.status(500).json({
        message: err.message || 'Internal Server Error'
    })
})


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));