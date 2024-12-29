const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const readStream = fs.createReadStream('largefile.txt');

  readStream.on('error', (err) => {
    console.error('Error reading file:', err);
    res.writeHead(500);
    res.end();
  });

  readStream.on('data', (chunk) => {
    res.write(chunk);
  });

  readStream.on('end', () => {
    res.end();
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});