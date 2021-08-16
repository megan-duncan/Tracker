import request from 'superagent'

const baseURL = 'api/v1/activities'

export const fetchActivities = () => {
  return request.get(baseURL)
    .then(response => {
      return response.body
    })
    .catch(err => {
      console.log(err.message)
    })
}

export const fetchActivityById = (id) => {
  return request.get(`${baseURL}/${id}`)
    .then(response => {
      return response.body
    })
    .catch(err => {
      console.log(err.message)
    })
}

export const addActivity = (activity) => {
  return request.post(baseURL)
    .send(activity)
    .then(response => {
      return response.body
    })
    .catch(err => {
      console.log(err.message)
    })
}

export const updateActivity = (id, activity) => {
  return request.patch(`${baseURL}/${id}`)
    .send(activity)
    .then(response => {
      return response.body
    })
    .catch(err => {
      console.log(err.message)
    })
}

export const deleteActivity = (id) => {
  return request.delete(`${baseURL}/${id}`)
    .then(response => {
      return response.body
    })
    .catch(err => {
      console.log(err.message)
    })
}
