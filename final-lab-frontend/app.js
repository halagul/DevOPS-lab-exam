// // app.js
// const http = require('http');

// const port = process.env.PORT || 3000;
// const rollNo = process.env.ROLL_NO || 'fa22-bse-124';

// const server = http.createServer((req, res) => {
//   res.writeHead(200, {'Content-Type':'text/plain'});
//   res.end(`Hello from Kubernetes on Azure_${rollNo}!`);
// });

// server.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });


// app.js
// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// const port = process.env.PORT || 3000;
// const rollNo = process.env.ROLL_NO || 'fa22-bse-124';

// const server = http.createServer((req, res) => {
//   if (req.url === '/' || req.url === '/index.html') {
//     const filePath = path.join(__dirname, 'index.html');
//     fs.readFile(filePath, (err, data) => {
//       if (err) {
//         res.writeHead(500, { 'Content-Type': 'text/plain' });
//         res.end('Internal Server Error while loading index.html');
//       } else {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.end(data);
//       }
//     });
//   } else {
//     res.writeHead(404, { 'Content-Type': 'text/plain' });
//     res.end('404 Not Found');
//   }
// });

// server.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}/`);
// });



//kkkk
const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/index.html') {
    const filePath = path.join(__dirname, 'index.html');
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(port, () => {
  console.log(`Frontend running at http://localhost:${port}`);
});
