const express = require('express')
const port = 3000

const {mongooose} = require('./db.js')

const server = express()

server.use(express.json())

server.listen(port, () => {console.log('server working on ' + port);})