import request from 'superagent'

const baseURL = 'api/v1/entries'

export const fetchEntries = () => {
  return request.get(baseURL)
    .then(response => {
      return response.body
    })
    .catch(err => {
      console.log(err.message)
    })
}

export const fetchEntryById = (id) => {
  return request.get(`${baseURL}/${id}`)
    .then(response => {
      return response.body
    })
    .catch(err => {
      console.log(err.message)
    })
}

export const addEntry = (entry) => {
  return request.post(baseURL)
    .send(entry)
    .then(response => {
      return response.body
    })
    .catch(err => {
      console.log(err.message)
    })
}

export const updateEntry = (id, entry) => {
  return request.patch(`${baseURL}/${id}`)
    .send(entry)
    .then(response => {
      return response.body
    })
    .catch(err => {
      console.log(err.message)
    })
}

export const deleteEntry = (id) => {
  return request.delete(`${baseURL}/${id}`)
    .then(response => {
      return response.body
    })
    .catch(err => {
      console.log(err.message)
    })
}
