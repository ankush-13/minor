import API from './axios'

export const getCurrentSignal = (id) => {
  return API.get(`/signal/current/${id}`)
}

export const manualOverride = (data) => {
  return API.post('/signal/override', data)
}