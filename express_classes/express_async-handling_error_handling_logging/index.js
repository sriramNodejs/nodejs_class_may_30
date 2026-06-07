const express = require('express');
require('dotenv').config();

const fs = require('fs/promises');

const app = express();
const PORT = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.status(200).json({
        status: true,
        message: 'hello from server'
    })
})


app.post('/create', async (req, res, next) => {


    try {
        const text = 'hello world';
        const newDate = Date.now().toString();
        const newFileName = `${newDate}-newFile.txt`
        // await fs.writeFile(newFileName, text);

        throw new Error('this is a error')

        res.status(200).json({
            status: true,
            message: 'file created'
        })
    } catch (error) {

        // send response direclty
        // res.status(500).json({
        //     message: 'internal server error'
        // })

        // send to global error handler 
        next(error)
    }
})


// custom error handling wrapper 
const catchAsync = (fn) => {
    return (req, res, next) => {
        fn(req, res, next).catch(next); // Automatically catches errors and forwards them
    };
};


// API using the custom error handler 
app.post('/custom-error-handler', catchAsync(async (req, res) => {
    const text = 'hello world';
    const newDate = Date.now().toString();
    const newFileName = `${newDate}-newFile.txt`
    // await fs.writeFile(newFileName, text);

    throw new Error('this is a error')

    res.status(200).json({
        status: true,
        message: 'file created'
    })
}))



// global error handler 
app.use((err, req, res, next) => {
    console.log('global error handler hitting')
    res.status(500).json({
        message: err.message || 'Internal Server Error'
    })
})


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));