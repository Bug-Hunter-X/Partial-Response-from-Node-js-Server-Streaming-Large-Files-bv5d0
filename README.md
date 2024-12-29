# Node.js Server Partial Response Bug

This repository demonstrates a common bug in Node.js servers when streaming large files. The server sends a partial response before the file is fully read. The solution involves using proper event listeners to handle file reading and response sending.

## Bug

The `bug.js` file contains the buggy code.  When requesting a large file, the server sends a partial response. This is because the response is sent before the file is fully read.

## Solution

The `bugSolution.js` file contains the corrected code.  This version uses event listeners to ensure that the response is only sent after the entire file has been read.