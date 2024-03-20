// import * as OTPAuth from "otpauth";
var OTPAuth = require('otpauth');
const http = require('node:http');

const port = 3000;

let totp = new OTPAuth.TOTP({
    digits: 6,
    period: 30,
    secret: "SJKJKSIUIUSJHJHJH",
});

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(totp.generate());
});

server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});