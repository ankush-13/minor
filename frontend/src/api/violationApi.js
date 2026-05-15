import API from './axios'

export const getViolations = (id) => {
  return API.get(`/violation/${id}`)
}

export const getViolationDetails = (id) => {
  return API.get(`/violation/details/${id}`)
}

export const createViolation = (data) => {
  return API.post('/violation', data)
}