import React from 'react'
import { Link } from 'react-router-dom'
import { useFetch } from 'hooks'
import api from 'api'

const Contacts = () => {
  const [contacts, loading] = useFetch({
    fetchMethod: api.contacts.all,
    defaultResponse: [],
  })

  if (loading) return (<h1>Loading...</h1>)

  return (
    <ul>
      {contacts.map((contact) => (
        <Link key={contact.id} to={`contacts/${contact.id}`}>
          <li>
            <p>{`${contact.first_name} ${contact.last_name || ''}`}</p>
            <p>{contact.phone_number}</p>
          </li>
        </Link>
      ))}
    </ul>
  )
}

export default Contacts
