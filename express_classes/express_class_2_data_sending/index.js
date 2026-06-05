const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('hello world')
})

app.post('/', (req, res) => {
    res.status(201).json({
        message:'this is from POST API'
    })
})

app.put('/', (req, res) => {
    res.status(400).json({
        message:'this is from PUT API'
    })
})

app.patch('/', (req, res) => {
    res.status(401).json({
        message:'this is from PATCH API'
    })
})

app.delete('/', (req, res) => {
    res.status(403).json({
        message:'this is from DELETE API'
    })
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})