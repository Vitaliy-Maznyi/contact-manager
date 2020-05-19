import {
  FETCH_CONTACTS_REQUEST,
  FETCH_CONTACTS_SUCCESS,
  FETCH_CONTACTS_ERROR,
} from './actionTypes'

export const fetchContactsRequest = () => ({
  type: FETCH_CONTACTS_REQUEST,
})

export const fetchContactsSuccess = (payload) => ({
  type: FETCH_CONTACTS_SUCCESS,
  payload,
})

export const fetchContactsError = (errors) => ({
  type: FETCH_CONTACTS_ERROR,
  errors,
})
