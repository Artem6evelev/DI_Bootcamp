// In this file, use http to create a server. You should return at least three different lines of HTML to the browser. (Use only HTML tags, no HTML files)
// Your server should run on http://localhost:3000/
const http = require('http');

const server = http.createServer((req, res) => {
    res.end('<h1>This is my first response<h1> <h1>This is my second response<h3> <h4>This is my third response<h4>')
    // res.end('<h1>This is my second response<h1>')
    // console.log('<h1>This is my second response<h1>');
})

server.listen(3000)

