import { combineReducers } from 'redux'
import { CONTACTS_KEY, CONTACT_KEY } from './storeKeys'
import contactsReducer from 'modules/contacts/reducer'
import contactReducer from 'modules/contact/reducer'

const makeRootReducer = () => combineReducers({
  [CONTACTS_KEY]: contactsReducer,
  [CONTACT_KEY]: contactReducer,
})

export default makeRootReducer
