import request from 'superagent'

const baseURL = 'api/v1/habits'

export const fetchHabits = () => {
  return request.get(baseURL)
    .then(response => {
      return response.body
    })
    .catch(err => {
      console.log(err.message)
    })
}

export const fetchHabitById = (id) => {
  return request.get(`${baseURL}/${id}`)
    .then(response => {
      return response.body
    })
    .catch(err => {
      console.log(err.message)
    })
}

export const addHabit = (habit) => {
  return request.post(baseURL)
    .send(habit)
    .then(response => {
      return response.body
    })
    .catch(err => {
      console.log(err.message)
    })
}

export const updateHabit = (id, habit) => {
  return request.patch(`${baseURL}/${id}`)
    .send(habit)
    .then(response => {
      return response.body
    })
    .catch(err => {
      console.log(err.message)
    })
}

export const deleteHabit = (id) => {
  return request.delete(`${baseURL}/${id}`)
    .then(response => {
      return response.body
    })
    .catch(err => {
      console.log(err.message)
    })
}
