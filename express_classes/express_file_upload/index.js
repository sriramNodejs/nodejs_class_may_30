const express = require('express');

const fileUpload = require('express-fileupload');

const {fileUploadMiddleware} = require('./helpers/helpers')

const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 5000;


app.use(express.json());

app.use(fileUpload());


app.get('/', (req, res) => {
    res.status(200).json({
        status:true, 
        message: "hello from server"
    })
})

app.post('/upload', fileUploadMiddleware, (req, res) => {
    res.status(200).json({
        status:true,
        message: 'file upload successfully'
    })
})


app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        status:false,
        message: 'Internal server error'
    })
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})