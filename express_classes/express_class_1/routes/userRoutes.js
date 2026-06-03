const express = require('express');

const router = express.Router();

router.get('/home', (req,res) => {
    res.send('user home page')
})

router.get('/my-orders', (req, res) => {
    res.send('my orders')
})


module.exports = router;