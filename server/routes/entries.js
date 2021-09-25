const express = require('express')

const db = require('../db/entries')

const router = express.Router()

router.get('/', (req, res) => {
  return db.getAllEntries()
    .then(entries => {
      return res.json(entries)
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  return db.getEntryById(id)
    .then(entry => {
      return res.json(entry)
    })
})

router.post('/', (req, res) => {
  const entry = req.body
  return db.addEntry(entry)
    .then(entry => {
      return res.json(entry)
    })
})

router.patch('/:id', (req, res) => {
  const id = req.params.id
  const entry = req.body
  return db.updateEntry(id, entry)
    .then(entry => {
      return res.json(entry)
    })
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  return db.deleteEntry(id)
    .then(() => {
      return res.json({ status: 'ok' })
    })
})

module.exports = router
