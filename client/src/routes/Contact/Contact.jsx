import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from 'hooks'
import api from 'api'

const Contact = () => {
  const { id } = useParams()

  const [contact, loading] = useFetch({
    fetchMethod: api.contacts.get,
    params: { id },
    defaultResponse: {},
  })

  if (loading) return (<h1>Loading...</h1>)

  return (
    <div>
      <p>{`${contact.first_name} ${contact.last_name || ''}`}</p>
      <p>{contact.phone_number}</p>
    </div>
  )
}

export default Contact
