const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json'); //? What is setHeader for
    const user = {
        firstname: 'John',
        lastname: 'Doe'
    }
    res.end(JSON.stringify(user)) //? What is end for
})

server.listen(8080)