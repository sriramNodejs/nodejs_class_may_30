const http = require('http');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
console.log(PORT, 'port number');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/plain'})
        res.write('Hello World from server.js')
        res.end();
    }
})

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})


/*

const path = require('path');
// Safely resolve the exact path using path.join and __dirname
require('dotenv').config({ path: path.join(__dirname, '../config/.env.dev') });

console.log(process.env.MY_VARIABLE);
*/


