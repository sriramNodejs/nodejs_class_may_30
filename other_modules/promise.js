// const newPromise = () => {
//     new Promise((resolve, reject) => {
//         const randNum = Math.floor(Math.random() * 10);
//         console.log(randNum, 'random number')
//         if (randNum % 2 === 0) {
//             resolve(randNum)
//         } else {
//             reject(new Error('Not an even number'))
//         }
//     })
// }



const util = require('util');

// 1. Add the return keyword here
const newPromise = () => {
    return new Promise((resolve, reject) => {
        const randNum = Math.floor(Math.random() * 10);
        console.log(randNum, 'random number');
        
        if (randNum % 2 === 0) {
            resolve(randNum);
        } else {
            reject(new Error('Not an even number'));
        }
    });
};

// 2. Convert it to a callback-style function
const callbackFunction = util.callbackify(newPromise);

// 3. Execute it using the standard (error, result) node callback format
callbackFunction((err, result) => {
    if (err) {
        console.error('Caught Error:', err.message);
        return;
    }
    console.log('Success Result:', result);
});




module.exports = { newPromise }