import api from 'api'

import {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError
} from './actionCreators'

export const fetchContact = (id) => async dispatch => {
  try {
    dispatch(fetchContactRequest())

    const { data } = await api.contacts.get(id)

    dispatch(fetchContactSuccess(data))
  } catch (err) {
    if (err.response.statusText) {
      dispatch(fetchContactError(err.response.statusText))
    } else {
      throw err
    }
  }
}
