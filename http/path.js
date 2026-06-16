const path = require('path');
const fs = require('fs');

// const newPath = path.join('folder1', 'folder2');
// console.log(newPath);

console.log(path.basename(__filename), '7');
console.log(path.extname(__filename), '7');
console.log(path.dirname(__filename), '7');


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