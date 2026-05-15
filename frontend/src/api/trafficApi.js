import API from './axios'

export const getLiveTraffic = (id) => {
  return API.get(`api/traffic/live/${id}`)
}

export const getTrafficHistory = (id) => {
  return API.get(`api/traffic/history/${id}`)
}

export const uploadTrafficVideo = (formData) => {
  return API.post('api/traffic/upload', formData)
}

export const saveTrafficData = (data) => {
  return API.post('api/traffic/data', data)
}