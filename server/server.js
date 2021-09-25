const express = require('express')
const path = require('path')

const server = express()

const habitsRoutes = require('./routes/habits')
const entriesRoutes = require('./routes/entries')

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))
server.use('/api/v1/habits', habitsRoutes)
server.use('/api/v1/entries', entriesRoutes)

module.exports = server
