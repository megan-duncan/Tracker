const connection = require('./connection')

const getAllHabits = (db = connection) => {
  return db('habits')
}

const getHabitById = (id, db = connection) => {
  return db('habits')
    .where('id', id)
    .first()
}

const addHabit = (habit, db = connection) => {
  return db('habits')
    .insert(habit)
    .then(ids => {
      return getHabitById(ids[0])
    })
}

const updateHabit = (id, habit, db = connection) => {
  return db('habits')
    .where('id', id)
    .update(habit)
    .then(() => {
      return getHabitById(id)
    })
}

const deleteHabit = (id, db = connection) => {
  return db('habits')
    .where('id', id)
    .delete()
}

module.exports = {
  getAllHabits,
  getHabitById,
  addHabit,
  updateHabit,
  deleteHabit
}
