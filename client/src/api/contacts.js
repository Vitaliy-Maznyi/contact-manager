import axios from 'axios'

export const all = async (scope) => (
  axios.get('/api/contacts', { params: scope })
)

export const get = async (params) => (
  axios.get(`/api/contacts/${params.id}`)
)
