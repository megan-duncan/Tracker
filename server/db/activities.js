const connection = require('./connection')

const getAllActivities = (db = connection) => {
  return db('activities')
}

const getActivityById = (id, db = connection) => {
  return db('activities')
    .where('id', id)
    .first()
}

const addActivity = (activity, db = connection) => {
  return db('activities')
    .insert(activity)
    .then(ids => {
      return getActivityById(ids[0])
    })
}

const updateActivity = (id, activity, db = connection) => {
  return db('activities')
    .where('id', id)
    .update(activity)
    .then(() => {
      return getActivityById(id)
    })
}

const deleteActivity = (id, db = connection) => {
  return db('activities')
    .where('id', id)
    .delete()
}

module.exports = {
  getAllActivities,
  getActivityById,
  addActivity,
  updateActivity,
  deleteActivity
}
