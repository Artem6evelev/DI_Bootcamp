//* Exercise 1 : Express & JSON
// const express = require('express')
// const app = express()
// const bodyParser =require('body-parser')

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

// * Exercise 2 : Express & Parameters
// app.get('/:id', (req, res) => {
//     console.log(req.params);
// })


// app.listen(3000, () => {
//     console.log(`Working!!!!`);
// })

//* Exercise 3: Express & Static Files
// Create a public folder, that contains an HTML file. This HTML file can contain some CSS and some JavaScript (for example a head tag with some classes for styling, and in the body a button with an onClick attribute calling a Javascript function with an alert)
// In a server.js file create your server using express.
// Use your server to get the static HTML file from the public folder
// Your server should run on http://localhost:3000/ to serve the HTML file
const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use('/', express.static(__dirname + '/public'))







app.listen(3000)




