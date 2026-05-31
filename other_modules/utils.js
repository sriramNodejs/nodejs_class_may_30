const abc = require('util');
const fs = require('fs')
const fsPromises = require('fs/promises');


// fs.readFile

// Promisify
// Callbackify


// const promiseReadFile = abc.promisify(fs.readFile)


// promiseReadFile('notes.txt', 'utf-8').then((data) => {
//     console.log(data, 'then catch')
// }).catch((err) => {
//     console.log(err)
// })


// const tryReadFile = async() => {
//     try{
//         const data = await promiseReadFile('notes.txt', 'utf-8');
//         console.log(data, 'try catch')
//     } catch(err){  
//         console.log(err)
//     } finally{
//         console.log('done')
//     }
// }

// tryReadFile();


// const callbackReadFile = abc.callbackify(fsPromises.readFile);

// callbackReadFile('os.js', 'utf-8', (err, data) => {
//     if(err){
//         console.log(err)
//         return;
//     }
//     console.log(data, 'callbackify')
// })