import {
  FETCH_CONTACTS_REQUEST,
  FETCH_CONTACTS_SUCCESS,
  FETCH_CONTACTS_ERROR,
  APPLY_CONTACTS_SCOPE,
} from './actionTypes'

import { contactsScopesKeys } from 'common/constants'

const actions = {}

actions[FETCH_CONTACTS_REQUEST] = (state) => (
  {
    ...state,
    loading: true,
  }
)

actions[FETCH_CONTACTS_SUCCESS] = (state, { payload, scope }) => {
  const contactsData = {
    [contactsScopesKeys.ALL]: {
      contacts: payload,
    },
    [contactsScopesKeys.FAVOURITES]: {
      favouriteContacts: payload,
    }
  }

  return {
    ...state,
    ...contactsData[scope],
    loading: false,
    errors: [],
  }
}

actions[FETCH_CONTACTS_ERROR] = (state, { payload }) => (
  {
    ...state,
    loading: false,
    errors: payload.errors,
  }
)

actions[APPLY_CONTACTS_SCOPE] = (state, { payload }) => (
  {
    ...state,
    scope: payload,
  }
)

export default actions
