import {
  FETCH_CONTACT_REQUEST,
  FETCH_CONTACT_SUCCESS,
  FETCH_CONTACT_ERROR,
} from './actionTypes'

export const fetchContactRequest = () => ({
  type: FETCH_CONTACT_REQUEST,
})

export const fetchContactSuccess = (payload) => ({
  type: FETCH_CONTACT_SUCCESS,
  payload,
})

export const fetchContactError = (errors) => ({
  type: FETCH_CONTACT_ERROR,
  errors: [errors],
})
