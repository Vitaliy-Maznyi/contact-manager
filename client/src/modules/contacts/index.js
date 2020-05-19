import api from 'api'

import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError
} from './actionCreators'

import { APPLY_CONTACTS_SCOPE } from './actionTypes'

export const fetchContacts = ({ scope }) => async dispatch => {
  try {
    dispatch(fetchContactsRequest())

    const { data } = await api.contacts.all({ scope })

    dispatch(fetchContactsSuccess(data))
  } catch (res) {
    if (res.data && res.data.errors) {
      dispatch(fetchContactsError(res.data.errors))
    } else {
      throw res
    }
  }
}

export const applyContactsScope = (payload) => ({
  type: APPLY_CONTACTS_SCOPE,
  payload,
})
