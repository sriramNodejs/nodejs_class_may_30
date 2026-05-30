// const data = fs.readFileSync('sample.txt', 'utf-8');
// console.log(data);



// fs.readFile('sample.txt', 'utf-8', (err, data) => {

//     if (err) {
//         console.log(err);
//         return;
//     }

//     console.log(data);
// });




// fs.writeFile(
//     'output.txt',
//     'Hello Node.js',
//     (err) => {

//         if (err) {
//             console.log(err);
//             return;
//         }

//         console.log('File Created');
//     }
// );



// fs.appendFile(
//     'logs.txt',
//     '\nNew Log Added',
//     (err) => {

//         if (err) {
//             console.log(err);
//             return;
//         }

//         console.log('Data Appended');
//     }
// );



// fs.unlink('sample.txt', (err) => {

//     if (err) {
//         console.log(err);
//         return;
//     }

//     console.log('File Deleted');
// });





// fs.rename(
//     'old.txt',
//     'new.txt',
//     (err) => {

//         if (err) {
//             console.log(err);
//             return;
//         }

//         console.log('Renamed');
//     }
// );



// fs.mkdir('uploads', (err) => {

//     if (err) {
//         console.log(err);
//         return;
//     }

//     console.log('Folder Created');
// });



// fs.readdir('./', (err, files) => {

//     if (err) {
//         console.log(err);
//         return;
//     }

//     console.log(files);
// });



// check file info

// fs.stat('sample.txt', (err, stats) => {

//     if (err) {
//         console.log(err);
//         return;
//     }

//     console.log(stats.isFile());
//     console.log(stats.size);
// });


// stream 

// const readStream = fs.createReadStream('bigfile.txt', 'utf-8');

// readStream.on('data', chunk => {
//     console.log(chunk);
// });



// const writeStream = fs.createWriteStream('output.txt');

// writeStream.write('Hello');



// const fs = require('fs/promises');

// async function readData() {

//     try {

//         const data = await fs.readFile(
//             'sample.txt',
//             'utf-8'
//         );

//         console.log(data);

//     } catch (err) {
//         console.log(err);
//     }
// }

// readData();



// Utils
// const fs = require('fs');

// fs.readFile('sample.txt', 'utf-8', (err, data) => {

//     if (err) {
//         console.log(err);
//         return;
//     }

//     console.log(data);
// });



// const fs = require('fs');
// const util = require('util');

// const readFile = util.promisify(fs.readFile);

// async function readData() {

//     const data = await readFile(
//         'sample.txt',
//         'utf-8'
//     );

//     console.log(data);
// }

// readData();



// util.callbackify()

// const util = require('util');

// async function getUser() {
//     return {
//         name: 'Ram'
//     };
// }

// const cbFunction = util.callbackify(getUser);

// cbFunction((err, data) => {
//     console.log(data);
// });



// Legacy system support
// Old libraries integration


// const util = require('util');

// const result = util.format(
//     'Hello %s your age is %d',
//     'Ram',
//     25
// );

// console.log(result);


// Placeholder	Meaning
// %s	String
// %d	Number
// %j	JSON
// %o	Object



// 7. util.deprecate()

// Marks a function as deprecated.

// const util = require('util');

// const oldFunction = util.deprecate(
//     () => {
//         console.log('Old Function');
//     },
//     'This function is deprecated'
// );

// oldFunction();


// Buffers

// Buffers in Node.js

// A Buffer is a temporary memory area used to store binary data.

// Node.js works heavily with binary data because files, videos, images, TCP packets, HTTP requests, etc. are all binary internally.

// JavaScript normally handles strings and objects, but Node.js uses Buffer to handle raw binary data.



// const buffer = Buffer.from('Hello');

// console.log(buffer);

// Output:

// <Buffer 48 65 6c 6c 6f>


// 2. Allocate Fixed Size

// const buffer = Buffer.alloc(10);

// console.log(buffer);


// 3. Convert Buffer to String
// const buffer = Buffer.from('Hello');

// console.log(
//     buffer.toString()
// );


// Access Individual Bytes
// const buffer = Buffer.from('ABC');

// console.log(buffer[0]);
// console.log(buffer[1]);


// Streams in Node.js

// Streams are used to process data piece by piece (chunks) instead of loading everything into memory.

// This is extremely important for:

// Large files
// Video streaming
// File uploads
// Real-time processing


// Without Stream Problem

// Suppose a file is:

// 5 GB video file

// If you use:

// fs.readFile()

// Entire 5GB loads into RAM.

// Problem:

// Huge memory usage
// Slow
// App crash possibility


// Types of Streams
// Stream Type	Purpose
// Readable	Read data
// Writable	Write data
// Duplex	Read + Write
// Transform	Modify data while streaming


// 1. Read Stream Example
// const fs = require('fs');

// const readStream =
//     fs.createReadStream(
//         'bigfile.txt',
//         'utf-8'
//     );

// readStream.on('data', chunk => {

//     console.log('Chunk Received');

//     console.log(chunk);
// });

// readStream.on('end', () => {
//     console.log('Finished');
// });



// 2. Write Stream Example
// const fs = require('fs');

// const writeStream =
//     fs.createWriteStream('output.txt');

// writeStream.write('Hello\n');

// writeStream.write('Node.js\n');

// writeStream.end();



// 3. Pipe Example (Very Important)

// Pipe transfers data from one stream to another.

// Equivalent to file copy.

// const fs = require('fs');

// const readStream =
//     fs.createReadStream('input.txt');

// const writeStream =
//     fs.createWriteStream('copy.txt');

// readStream.pipe(writeStream);



// 4. HTTP Stream Example

// Very important backend example.

// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {

//     const stream =
//         fs.createReadStream('video.mp4');

//     stream.pipe(res);
// });

// server.listen(3000);


// Why This Is Powerful

// Instead of:

// Video → RAM → Client

// It becomes:

// Video → Stream → Client

// Very memory efficient.

// Used by:

// YouTube
// Netflix
// File download systems




// Error Handling in Node.js

// Error handling means properly catching and managing errors so the application does not crash unexpectedly.

// Types of Errors in Node.js
// Type	Example
// Syntax Errors	Wrong JS syntax
// Runtime Errors	Undefined variable
// Logical Errors	Wrong business logic
// System Errors	File not found
// Async Errors	API/database failure


// 1. Try-Catch (Synchronous Errors)

// Used for synchronous code.

// try {

//     const result = 10 / 0;

//     console.log(result);

// } catch (err) {

//     console.log(err.message);
// }


// Example

// try {

//     JSON.parse('invalid json');

// } catch (err) {

//     console.log('Invalid JSON');
// }


Important

// try-catch does NOT catch async callback errors automatically.

// Wrong:

// try {

//     setTimeout(() => {
//         throw new Error('Error');
//     }, 1000);

// } catch (err) {

//     console.log(err);
// }

// This will crash.





// 2. Callback Error Handling

// Old Node.js style follows:

// (error, data)

// Pattern.

// Example:

// const fs = require('fs');

// fs.readFile(
//     'test.txt',
//     'utf-8',
//     (err, data) => {

//         if (err) {

//             console.log(err.message);
//             return;
//         }

//         console.log(data);
//     }
// );



// 3. Promise Error Handling
// fetchData()
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err.message);
//     });



// 4. Async/Await Error Handling

// Most important modern approach.

// async function getData() {

//     try {

//         const data = await fetchData();

//         console.log(data);

//     } catch (err) {

//         console.log(err.message);
//     }
// }


// 5. Throw Custom Errors
// function divide(a, b) {

//     if (b === 0) {

//         throw new Error(
//             'Division by zero not allowed'
//         );
//     }

//     return a / b;
// }



// 6. Custom Error Classes

// Very important for backend applications.

// class AppError extends Error {

//     constructor(message, statusCode) {

//         super(message);

//         this.statusCode = statusCode;
//     }
// }

// throw new AppError(
//     'User Not Found',
//     404
// );




// 7. HTTP Server Error Handling

// Example with http module.

// const http = require('http');

// const server = http.createServer((req, res) => {

//     try {

//         if (req.url === '/error') {

//             throw new Error('Something Failed');
//         }

//         res.end('Success');

//     } catch (err) {

//         res.statusCode = 500;

//         res.end(err.message);
//     }
// });

// server.listen(3000);


// 8. Stream Error Handling

// Very important.

// const fs = require('fs');

// const stream =
//     fs.createReadStream('missing.txt');

// stream.on('error', err => {

//     console.log(err.message);
// });


// 9. Global Error Handling
// Uncaught Exception

// Handles unexpected sync crashes.

// process.on(
//     'uncaughtException',
//     err => {

//         console.log(
//             'Uncaught Exception'
//         );

//         console.log(err.message);

//         process.exit(1);
//     }
// );



// Unhandled Promise Rejection

// Very important in modern Node.js.

// process.on(
//     'unhandledRejection',
//     err => {

//         console.log(
//             'Unhandled Rejection'
//         );

//         console.log(err.message);

//         process.exit(1);
//     }
// );


// 10. Express.js Error Middleware

// In Express.js:

// app.use((err, req, res, next) => {

//     res.status(500).json({
//         message: err.message
//     });
// });



// Common Node.js System Errors
// Error Code	Meaning
// ENOENT	File not found
// EADDRINUSE	Port already used
// ECONNREFUSED	Connection refused
// ETIMEDOUT	Timeout
// EACCES	Permission denied


// Best Practices
// Practice	Why
// Use try-catch	Prevent crashes
// Handle async errors	Avoid rejection crashes
// Use custom errors	Better API responses
// Log errors	Debugging
// Never expose stack traces	Security
// Use centralized error handling	Cleaner architecture