const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

const { validations } = require('./helpers/validation');
const { validateMiddleware } = require('./helpers/helpers');

const app = express();

app.use(express.json());


app.get('/', (req, res) => {
    res.send('hello world')
})

app.post('/user/create', validations.createUser, validateMiddleware,(req, res) => {
    res.send('user created successfully')
})

app.delete('/user/delete/:id', validations.deleteUser, validateMiddleware, (req, res) => {
    res.send('user deleted successfully of id ' + req.params.id)
})

app.put('/user/update', validations.updateUser, validateMiddleware, (req, res) => {
    res.send('user updated successfully of id ' + req.query.id)
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});