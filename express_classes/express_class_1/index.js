const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 5000;



// global objects

// process
// Buffer
// console

// app.get('/', (req, res) => {
//     // try {
//         throw new Error('hello world')
//     // } catch (error) {
//     //     res.status(500).json({name:"nodejs", "age":2009})
//     // }
//     // res.send('hello world')   // 200 
//     // res.status(400).json({name:"nodejs", "age":2009})

// })

// app.get('/users', (req, res) => {
//     res.send('users page')   // 200 
//     // res.status(500).json({name:"nodejs", "age":2009})
// })


// importing routes
const adminRoutes = require('./routes/adminRoutes');
const sellerRoutes = require('./routes/sellerRoutes');
const userRoutes = require('./routes/userRoutes');

const usersRoutes = require('./routes/userRoute')

// register routes
app.use('/admin', adminRoutes);
app.use('/seller', sellerRoutes);
app.use('/user', userRoutes);

app.use('/users', usersRoutes)


// global error handler

app.use((err, req, res, next) => {
    res.status(500).json({status:false, "message":"internal server error"})
})


app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
})

// localhost:3000/admin/dashboard
// localhost:3000/user/my-orders