const http = require('http');
const fs = require('fs');


const server = http.createServer((request, response) => {
    // console.log(request, 'request')
    // console.log(request.method, 'method')
    if (request.url === '/' && request.method === 'GET') {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.statusCode = 200;
        // response.
        response.write('Hello World!')
        response.end();
    } else if (request.url === '/users') {
        response.writeHead(200, { 'Content-Type': 'application/json' })
        response.write(JSON.stringify({ name: 'John', age: 30 }))
        response.end();
    }
    else if (request.url === '/page') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Node.js HTML Server</title>
        </head>
        <body>
            <h1>Hello, World!</h1>
            <p>This HTML is rendered directly from a Node.js string.</p>
        </body>
        </html>
    `);
    } 
    else if (request.url === '/page33') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Node.js HTML Server</title>
        </head>
        <body>
            <h1>Hello, World! 33</h1>
            <p>This HTML is rendered directly from a Node.js string.</p>
        </body>
        </html>
    `);
    }
     else if (request.url === '/page90') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        const content = fs.readFileSync('./index.html', 'utf8')
        response.end(content);
    } 
    else if(request.url === '/' && request.method === "POST") {
        response.writeHead(200, { 'Content-Type': 'text/plain' })
        response.write('Hello world from POST method')
        response.end();
    }
    else {
        response.writeHead(200, { 'Content-Type': 'application/json' })
        response.write(JSON.stringify({ name: 'John', age: 30 }))
        response.end();
    }
})

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
})