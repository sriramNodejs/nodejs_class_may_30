const newPromise = () => {
    new Promise((resolve, reject) => {
        const randNum = Math.floor(Math.random() * 10);
        console.log(randNum, 'random number')
        if (randNum % 2 === 0) {
            resolve(randNum)
        } else {
            reject(new Error('Not an even number'))
        }
    })
}





module.exports = { newPromise }