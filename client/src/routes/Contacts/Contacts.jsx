import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { LoadingContainer } from 'components'
import { CONTACTS_KEY } from 'store/storeKeys'
import { fetchContacts } from 'modules/contacts'
import { selectScopedContacts } from "modules/contacts/selectors"
import { isEmpty } from 'lodash'
import ListGroup from 'react-bootstrap/ListGroup'
import ContactRow from './ContactRow'
import ScopeTabs from './ScopeTabs'

const Contacts = () => {
  const { data, loading, scope } = useSelector(state => (
    selectScopedContacts(state[CONTACTS_KEY])
  ))
  const dispatch = useDispatch()

  useEffect(() => {
    if (isEmpty(data)) {
      dispatch(fetchContacts({ scope }))
    }
  }, [scope])

  return (
    <>
      <ScopeTabs />
      <LoadingContainer loading={loading}>
        <ListGroup variant='flush'>
          {data.map((contact) => (
            <ContactRow key={contact.id} contact={contact} />
          ))}
        </ListGroup>
      </LoadingContainer>
    </>
  )
}

export default Contacts
