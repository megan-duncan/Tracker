const express = require('express')
const path = require('path')

const server = express()

const habitsRoutes = require('./routes/habits')
const activitiesRoutes = require('./routes/activities')

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))
server.use('/api/v1/habits', habitsRoutes)
server.use('/api/v1/activities', activitiesRoutes)

module.exports = server
