const { createReadStream, createWriteStream } = require('fs');
// const fs = require('fs')


// const readStream = createReadStream('notes1.txt', 'utf-8');

// readStream.on('data', chunk => {
//     console.log(chunk);
// });


const writeStream = createWriteStream('output.txt');
writeStream.write('this is a nodejs file dfshlskdjfl');