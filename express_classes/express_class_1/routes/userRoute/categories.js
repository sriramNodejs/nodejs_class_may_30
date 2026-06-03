const express = require('express');

const router = express.Router();


router.get('/categories', (req, res) => {
    res.send('user categories')
})


module.exports = router;