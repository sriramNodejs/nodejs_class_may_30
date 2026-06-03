const express = require('express');

const router = express.Router();


router.get('/orders', (req, res) => {
    res.send('user orders')
})


module.exports = router;