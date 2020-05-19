import { contactsScopesKeys } from 'common/constants'
import actions from './actions'

const initialState = {
  contacts: [],
  favouriteContacts: [],
  loading: false,
  errors: [],
  scope: contactsScopesKeys.ALL,
}

export default (state = initialState, action) => {
  const handler = actions[action.type]

  return handler ? handler(state, action) : state
}
