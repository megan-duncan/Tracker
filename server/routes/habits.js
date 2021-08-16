const express = require('express')

const db = require('../db/habits')

const router = express.Router()

router.get('/', (req, res) => {
  return db.getAllHabits()
    .then(habits => {
      return res.json(habits)
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  return db.getHabitById(id)
    .then(habit => {
      return res.json(habit)
    })
})

router.post('/', (req, res) => {
  const habit = req.body
  return db.addHabit(habit)
    .then(habit => {
      return res.json(habit)
    })
})

router.patch('/:id', (req, res) => {
  const id = req.params.id
  const habit = req.body
  return db.updateHabit(id, habit)
    .then(habit => {
      return res.json(habit)
    })
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  return db.deleteHabit(id)
    .then(() => {
      return res.json({ status: 'ok' })
    })
})

module.exports = router
