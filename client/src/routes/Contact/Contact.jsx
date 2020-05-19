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
      <p>{`${contact.firstName} ${contact.lastName || ''}`}</p>
      <p>{contact.phoneNumber}</p>
    </div>
  )
}

export default Contact
