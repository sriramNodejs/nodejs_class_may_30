const { newPromise } = require('./promise')
const utils = require('util');

// newPromise.then((data) => {
//     console.log(data)
// }).catch((err) => {
//     console.log(err)
// })

const cbNewPromise = utils.callbackify(newPromise)

console.log(cbNewPromise, 'cb new promise')

cbNewPromise((err, data) => {
    if(err){
        console.log(err)
        return;
    }
    console.log(data)
})