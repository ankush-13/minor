import API from './axios'

export const getLiveTraffic = (id) => {
  return API.get(`traffic/live/${id}`)
}

export const getTrafficHistory = (id) => {
  return API.get(`traffic/history/${id}`)
}

export const uploadTrafficVideo = (formData) => {
  return API.post('traffic/upload', formData)
}

export const saveTrafficData = (data) => {
  return API.post('traffic/data', data)
}