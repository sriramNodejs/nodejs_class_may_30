const express = require('express');
const { rateLimit } = require('express-rate-limit');
require('dotenv').config();


const PORT = process.env.PORT || 5000;

const app = express();

app.use(rateLimit({
    windowMs: 1 * 60 * 1000,
    limit: 10,
    // message: 'Too many requests from this IP, please try again later.',
    message: {
        status:false,
        message: 'Too many requests from this IP, please try again later.'
    },
    standardHeaders: 'draft-7',
    legacyHeaders: true,
}))


app.get('/check', (req, res) => {
    res.status(200).json({
        status:true,
        message:'API is working fine'
    })
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));