import { combineReducers } from 'redux'
import { CONTACTS_KEY } from './storeKeys'
import contactsReducer from 'modules/contacts/reducer'

const makeRootReducer = () => combineReducers({
  [CONTACTS_KEY]: contactsReducer,
})

export default makeRootReducer
