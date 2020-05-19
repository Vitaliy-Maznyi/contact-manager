import React from 'react'
import api from 'api'
import ListGroup from 'react-bootstrap/ListGroup'
import { useFetch } from 'hooks'
import ContactRow from './ContactRow'

const Contacts = () => {
  const [contacts, loading] = useFetch({
    fetchMethod: api.contacts.all,
    defaultResponse: [],
  })

  if (loading) return (<h1>Loading...</h1>)

  return (
    <ListGroup variant="flush">
      {contacts.map((contact) => (
        <ContactRow key={contact.id} contact={contact} />
      ))}
    </ListGroup>
  )
}

export default Contacts
