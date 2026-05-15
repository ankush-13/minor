import API from './axios'

export const getDashboardData = (id) => {
  return API.get(`/dashboard/${id}`)
}