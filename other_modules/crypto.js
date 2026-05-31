const crypto = require('crypto')

// console.log(crypto.randomBytes(7).toString('hex'))


// const hash = crypto.createHash('sha256');

// // Update the hash with data
// hash.update('Hello, World!');

// // Get the digest in hexadecimal format
// const digest = hash.digest('hex');
// console.log(digest);




const data = 'Hello, World!';

const md5 = crypto.createHash('md5').update(data).digest('hex');
console.log('MD5:', md5);

// SHA-1 (not recommended for security-critical applications)
const sha1 = crypto.createHash('sha1').update(data).digest('hex');
console.log('SHA-1:', sha1);

// SHA-256
const sha256 = crypto.createHash('sha256').update(data).digest('hex');
console.log('SHA-256:', sha256);

// SHA-512
const sha512 = crypto.createHash('sha512').update(data).digest('hex');
console.log('SHA-512:', sha512); 