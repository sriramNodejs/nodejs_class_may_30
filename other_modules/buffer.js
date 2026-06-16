// Buffer


// console.log(Buffer.from('hello'));

// what is Buffer ?
// A buffer is a temporary memory area used to store binary data;

// how to create buffer 
const newBuffer = Buffer.alloc(10);
console.log(newBuffer, 'new buffer')
console.log(newBuffer[0]);

const helloBuffer = Buffer.from('hello');

console.log(helloBuffer.toString());

console.log(helloBuffer[0], helloBuffer[1]);