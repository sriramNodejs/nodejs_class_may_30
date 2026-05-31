const { error } = require('console');
const fs = require('fs');
const fsP = require('fs/promises')

// error 

// Error

// const createError = async() => {
//     try{
//         throw new Error('Error thrown')
//     } catch(error){
//         console.log(error)
//     } finally{
//         console.log('finally')
//     }
// }

// createError();


// middlewares 
// app.use((err, req, res, next) => {
//     res.status(500).json({
//         message: 'internal server error'
//     })
// })


// fs.readFile('hello.txt', 'utf-8', (error, data) =>{
//     if(error){
//         console.log('error', error)
//         return;
//     }

//     console.log(data)
// })


fsP.readFile('hello.txt', 'utf-8').then(data => console.log(data))
.catch(error => console.log('error', error))

// Error 
// 1. Reference error
// 2. Syntax error
// 3. Type Error
// 4. Inbuild error 
// 5. Custom Error 

// JWT -> jsonwebtoken

// if (error instanceof jwtError ){

// }


// bcrypt -> password encrytpion


