const fs = require('fs/promises');

// new file creating 


// then catch way
// fs.writeFile('notes3_promise.txt', 'This is a new note created using promises').then(() => {
//     console.log('File written successfully');
// }).catch((err) => {
//     console.log(err);
// });



// async await way
async function createFile(){
    try{
    await fs.writeFile('notes4_promise.txt', 'This is another new note created using async await');
        console.log('File written successfully');
    } catch(err){
        console.log(err)
    }
}

createFile();