import { contactsScopesKeys } from 'common/constants'

export const selectScopedContacts = ({ contacts, favouriteContacts, scope, loading }) => {
  let data = []
  switch (scope) {
    case contactsScopesKeys.ALL:
      data = contacts
      break
    case contactsScopesKeys.FAVOURITES:
      data = favouriteContacts
      break
    default:
      break
  }

  return { data, scope, loading }
}
