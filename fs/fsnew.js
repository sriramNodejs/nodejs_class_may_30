const fs = require('fs');

// asnync way
// fs.readFile('notes.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(data, 'from async');
// });

// // sync way
// const data = fs.readFileSync('notes.txt', 'utf-8');
// console.log(data, 'sync ');


// write a file
// async way
// fs.writeFile('notes1.txt', 'This is a new note', (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('File written successfully');
// });


// sync way

// fs.writeFileSync('notes2.txt', 'This is another new note');


// append 
// attach new content
// fs.appendFile('notes.txt', '\nthis is appended line', (err) => {
//     if(err){
//         console.log(err)
//         return ;
//     }

//     console.log('Appended successfully');
// })



// unlink -> delete the file
// fs.unlink('notes.txt', (err) => {
//     if(err){
//         console.log(err);
//         return;
//     }

//     console.log('File deleted successfully');
// });


// create a folder
// fs.mkdir('fileSystem', (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }

//     console.log('Folder Created successfully');
// })


// rename -> change the name 

// fs.rename('fileSystem', 'fileSystemNew', (err) => {
//     if(err){
//         console.log(err);
//         return;
//     }

//     console.log('Renamed successfully');
// })



// read dir 

// reads files and folders inside this folder

// fs.readdir('fileSystemNew', (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }

//     console.log(data, 'from readdir');
// })


// check file information
fs.stat('fsPromise.js', (err, stats) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(stats);
    console.log(stats.isFile());
    console.log(stats.isDirectory());
})

