const express = require('express');

const router = express.Router();


router.get('/dashboard', (req, res) => {
    res.send('seller dashboard')
})

router.get('/orders', (req, res) => {
    res.send('seller orders')
})

module.exports = router;