import {
  FETCH_CONTACT_REQUEST,
  FETCH_CONTACT_SUCCESS,
  FETCH_CONTACT_ERROR,
} from './actionTypes'

const actions = {}

actions[FETCH_CONTACT_REQUEST] = (state) => (
  {
    ...state,
    loading: true,
  }
)

actions[FETCH_CONTACT_SUCCESS] = (state, { payload }) => (
  {
    ...state,
    loading: false,
    contact: payload,
  }
)

actions[FETCH_CONTACT_ERROR] = (state, { errors }) => (
  {
    ...state,
    loading: false,
    errors,
  }
)

export default actions
