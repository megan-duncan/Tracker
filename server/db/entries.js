const connection = require('./connection')

const getAllEntries = (db = connection) => {
  return db('entries')
}

const getEntryById = (id, db = connection) => {
  return db('entries')
    .where('id', id)
    .first()
}

const addEntry = (entry, db = connection) => {
  return db('entries')
    .insert(entry)
    .then(ids => {
      return getEntryById(ids[0])
    })
}

const updateEntry = (id, entry, db = connection) => {
  return db('entries')
    .where('id', id)
    .update(entry)
    .then(() => {
      return getEntryById(id)
    })
}

const deleteEntry = (id, db = connection) => {
  return db('entries')
    .where('id', id)
    .delete()
}

module.exports = {
  getAllEntries,
  getEntryById,
  addEntry,
  updateEntry,
  deleteEntry
}
