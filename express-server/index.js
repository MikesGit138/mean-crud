const express = require('express')
const port = 3000

const {mongoose} = require('./db.js')

const server = express()

server.use(express.json())

server.listen(port, () => {console.log('server working on ' + port);})

server.use('/students', require('./controllers/studentcontroller'))