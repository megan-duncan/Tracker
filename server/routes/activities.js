const express = require('express')

const db = require('../db/activities')

const router = express.Router()

router.get('/', (req, res) => {
  return db.getAllActivities()
    .then(activities => {
      return res.json(activities)
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  return db.getActivityById(id)
    .then(activity => {
      return res.json(activity)
    })
})

router.post('/', (req, res) => {
  const activity = req.body
  return db.addActivity(activity)
    .then(activity => {
      return res.json(activity)
    })
})

router.patch('/:id', (req, res) => {
  const id = req.params.id
  const activity = req.body
  return db.updateActivity(id, activity)
    .then(activity => {
      return res.json(activity)
    })
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  return db.deleteActivity(id)
    .then(() => {
      return res.json({ status: 'ok' })
    })
})

module.exports = router
