const express = require('express')
const bodyParser = require('body-parser')
// middleware to 
const cors = require('cors') 
// declaring the port number for express server on
const PORT = 2000
// telling server to use this route; defining api route for the server.
const api = require('./routes/api')
// creating instance of express
const app = express()
// to handle json data
app.use(cors())
app.use(bodyParser.json())
app.use('/api', api)
// response to the preflight request if you inject 
// following headers the browser understands that it is ok to make further calls.
/*app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "localhost:4200");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });*/
  
// code to test get request with callback function, function.
app.get('/', function(req, res) {
    res.send('server!')
})
// assigning specific port for server
app.listen(PORT, function() {
    console.log('server running on localhost:' + PORT)
})