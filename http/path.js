const path = require('path');
const fs = require('fs');

// const newPath = path.join('folder1', 'folder2');
// console.log(newPath);


// current folder name
console.log(__dirname);

// current file name
console.log(__filename);

const newPath = path.join(__dirname, 'test')

fs.mkdir(newPath, (err) => {
    if (err) {
        console.log(err);
        return
    }
    console.log('Folder created successfully');
})