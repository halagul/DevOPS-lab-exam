// app.js
const http = require('http');

const port = process.env.PORT || 3000;
const rollNo = process.env.ROLL_NO || 'fa22-bse-124';

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type':'text/plain'});
  res.end(`Hello from Kubernetes on Azure_${rollNo}!`);
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
