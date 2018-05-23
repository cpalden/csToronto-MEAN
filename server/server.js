const express = require('express')
const bodyParser = require('body-parser')
// declaring the port number for express server on
const PORT = 2000
// creating instance of express
const app = express()
// to handle json data
app.use(bodyParser.json())
//
app.get('/', function(req, res) {
    res.send('server!')
})
// assigning specific port for server
app.listen(PORT, function() {
    console.log('server running on localhost:' + PORT)
})