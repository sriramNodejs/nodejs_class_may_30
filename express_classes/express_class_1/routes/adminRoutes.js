const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    res.send('admin home route')
})


router.get('/dashboard', (req, res) => {
    res.send('admin dashboard')
})


router.get('/orders', (req, res) => {
    res.send('admin orders')
})


module.exports = router;