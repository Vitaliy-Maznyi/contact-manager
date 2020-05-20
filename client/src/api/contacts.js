import axios from 'axios'

export const all = async (scope) => (
  await axios.get('/api/contacts', { params: scope })
)

export const get = async (id) => (
  await axios.get(`/api/contacts/${id}`)
)

// params should be transformed on the backend
export const create = async (params) => (
  await axios.post('/api/contacts', {
    contact: {
      first_name: params.firstName,
      last_name: params.lastName,
      phone_number: params.phoneNumber,
      favourite: params.favourite,
    }
  })
)


// params should be transformed on the backend
export const update = async (id, params) => (
  await axios.patch(`/api/contacts/${id}`, {
    contact: {
      first_name: params.firstName,
      last_name: params.lastName,
      phone_number: params.phoneNumber,
      favourite: params.favourite,
    }
  })
)

export const remove = async (id) => (
  await axios.delete(`/api/contacts/${id}`)
)
