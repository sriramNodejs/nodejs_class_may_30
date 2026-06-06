const express = require('express');
const { validateWithJoi } = require('./helpers/helper');
const { schemas } = require('./validations/validations');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());


app.get('/', (req, res) => {
    res.send('hello world')
})

app.post('/signin', validateWithJoi(schemas.createUser), (req, res) => {
    res.status(200).json({
        status:true,
        message: 'user created successfully'
    })
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});