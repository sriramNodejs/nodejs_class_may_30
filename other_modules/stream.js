const { createReadStream, createWriteStream } = require('fs');
// const fs = require('fs')


// const readStream = createReadStream('notes1.txt', 'utf-8');

// readStream.on('data', chunk => {
//     console.log(chunk);
// });

// readStream.on('end', chunk => {
//     console.log('read completed')
// });


// const writeStream = createWriteStream('output.txt');
// writeStream.write('this is a nodejs file dfshlskdjfl');



// pipe
// pipe transfer data from one stream to another stream 

const readStream = createReadStream('notes1.txt', 'utf-8');

const writeStream = createWriteStream('notes1_output.txt', 'utf-8');

readStream.pipe(writeStream)