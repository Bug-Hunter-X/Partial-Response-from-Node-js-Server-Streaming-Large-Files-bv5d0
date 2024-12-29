const http = require('http');

const server = http.createServer((req, res) => {
  // This is a common error when dealing with large files
  // The response is sent before the file is fully read
  const readStream = fs.createReadStream('largefile.txt');
  readStream.pipe(res);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});