import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { LoadingContainer } from 'components'
import { CONTACTS_KEY } from 'store/storeKeys'
import { fetchContacts } from 'modules/contacts'
import ListGroup from 'react-bootstrap/ListGroup'
import ContactRow from './ContactRow'
import ScopeTabs from './ScopeTabs'

const Contacts = () => {
  const { contacts, loading, scope } = useSelector(state => state[CONTACTS_KEY])
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContacts({ scope }));
  }, [scope])

  return (
    <>
      <ScopeTabs />
      <LoadingContainer loading={loading}>
        <ListGroup variant='flush'>
          {contacts.map((contact) => (
            <ContactRow key={contact.id} contact={contact} />
          ))}
        </ListGroup>
      </LoadingContainer>
    </>
  )
}

export default Contacts
