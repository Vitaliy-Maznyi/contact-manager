import { CONTACTS_KEY, CONTACT_KEY } from 'store/storeKeys'
import { find } from 'lodash'

export const selectContact = (state, contactId) => {
  // try to find in persisted collection
  let contact = find(state[CONTACTS_KEY].contacts, (contact) => contact.id === parseInt(contactId))

  if (!contact) {
    const contactFromState = state[CONTACT_KEY].contact
    if (contactFromState.id === parseInt(contactId)) {
      contact = contactFromState
    } else {
      contact = {}
    }
  }

  return { contact, loading: state[CONTACT_KEY].loading }
}
