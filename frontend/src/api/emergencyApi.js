import API from './axios'

export const triggerEmergency = (data) => {
  return API.post('/emergency/trigger', data)
}

export const getEmergencyStatus = (id) => {
  return API.get(`/emergency/status/${id}`)
}