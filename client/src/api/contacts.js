import axios from 'axios'

export const all = async () => (
  axios.get('/api/contacts')
)

export const get = async (params) => (
  axios.get(`/api/contacts/${params.id}`)
)
