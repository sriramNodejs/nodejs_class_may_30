// after nodejs 22 versions we can pass .env files in the direct to node without dotenv 

// we can use .env file without dotenv module 
// node --env-file=.env index.js

const http = require('http');
const PORT = process.env.PORT || 5000;
const fs = require('fs');
const path = require('path')

const htmlData = fs.readFileSync('index.html', 'utf-8');
const PDF_PATH = path.join(__dirname, 'sample.pdf');


const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.write('this is from server');
        res.end()
    } else if (req.url === "/users") {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify([
            {
                name: 'nodejs',
                age: 12
            }
        ]));
        res.end()
    } else if (req.url === "/html") {
        // res.statusCode = 200;
        // res.setHeader('Content-Type', 'text/html');
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
        res.end(htmlData)
    } else if (req.url === "/pdf") {
        fs.stat(PDF_PATH, (err, stats) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('404 Not Found: PDF file missing.');
                return;
            }

            // 1. Set the correct headers
            res.writeHead(200, {
                'Content-Type': 'application/pdf',
                'Content-Length': stats.size,
                // 'inline' displays it in browser; 'attachment' forces a download
                // 'Content-Disposition': 'inline; filename="document.pdf"'
                'Content-Disposition': 'attachment; filename="downloaded-file.pdf"',
            });

            // 2. Stream the file directly to the response object
            const fileStream = fs.createReadStream(PDF_PATH);
            fileStream.pipe(res);
        });
    }
    if (req.url === '/download-pdf' && req.method === 'GET') {

        // 1. Verify if the file actually exists on the disk
        fs.access(PDF_PATH, fs.constants.F_OK, (err) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                return res.end('File Not Found');
            }

            // 2. Set the appropriate HTTP Headers for a file download
            res.writeHead(200, {
                'Content-Type': 'application/pdf',
                // 'attachment' forces the browser to download rather than display inline
                'Content-Disposition': 'attachment; filename="downloaded-file.pdf"',
                // Optional: Helps the client track download progress
                'Content-Length': fs.statSync(PDF_PATH).size
            });

            // 3. Stream the file to the response to optimize memory usage
            const fileStream = fs.createReadStream(PDF_PATH);

            // Handle edge case where file disappears or becomes unreadable mid-stream
            fileStream.on('error', (streamErr) => {
                console.error(streamErr);
                if (!res.headersSent) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Internal Server Error');
                }
            });

            fileStream.pipe(res);
        });
    }
});

server.listen(PORT, () => {
    console.log(`server is runnin on ${PORT}`)
})