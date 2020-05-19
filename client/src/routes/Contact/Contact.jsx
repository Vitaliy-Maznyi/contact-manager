import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectContact } from 'modules/contact/selectors'
import { fetchContact } from 'modules/contact'
import { isEmpty } from 'lodash'

const Contact = () => {
  const { id } = useParams()

  const { contact, loading } = useSelector(state => (
    selectContact(state, id)
  ))
  const dispatch = useDispatch()

  useEffect(() => {
    if (isEmpty(contact)) {
      dispatch(fetchContact(id))
    }
  }, [id])

  if (loading) return (<h1>Loading...</h1>)

  return (
    <div>
      <p>{`${contact.firstName} ${contact.lastName || ''}`}</p>
      <p>{contact.phoneNumber}</p>
    </div>
  )
}

export default Contact
