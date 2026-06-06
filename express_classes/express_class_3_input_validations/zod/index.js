const express = require('express');
require('dotenv').config();
const { validateWithZod } = require('./middlewares/middleware')
const {validations} = require('./validations/validations')

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());


app.get('/', (req, res) => {
    res.send('hello world')
})

app.post('/user', validateWithZod(validations.createUser), (req, res) => {
    res.send('user created successfully')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});