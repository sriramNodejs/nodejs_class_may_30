const express = require('express');
const app = express();
require('dotenv').config();
const morgan = require('morgan');


const { requestChecker, middleware2, middleware3  } = require('./middlewares/middlewares')



const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(morgan('combined'));


app.use(middleware3)

app.get('/', requestChecker,middleware2, middleware3, (req, res) => {
    res.send('hello world')
})

// qs (query string )

app.post('/', (req, res) => {
    console.log(req.query, 'request query')
    res.status(201).json({
        message: 'this is from POST API'
    })
})

app.put('/', (req, res) => {
    res.status(400).json({
        message: 'this is from PUT API'
    })
})

app.patch('/:id/:name', (req, res) => {
    console.log(req.params, 'request params')
    console.log(req.query, 'query');
    const { name, age } = req.query;
    console.log(name, age, 'query params singles')
    res.status(401).json({
        message: 'this is from PATCH API'
    })
})

app.delete('/', (req, res) => {
    console.log(req.body, 'request body')
    res.status(403).json({
        message: 'this is from DELETE API'
    })
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})