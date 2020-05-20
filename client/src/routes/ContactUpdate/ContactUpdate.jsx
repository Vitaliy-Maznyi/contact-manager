import React from 'react'
import api from 'api'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { selectContact } from 'modules/contact/selectors'
import { fetchContacts } from 'modules/contacts'
import { ContactForm, LoadingContainer } from 'components'
import { contactsScopesKeys } from 'common/constants'

const ContactUpdate = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const history = useHistory()

  const { contact, loading } = useSelector(state => (
    selectContact(state, id)
  ))

  const initialValues = {
    firstName: contact.firstName,
    lastName: contact.lastName,
    phoneNumber: contact.phoneNumber,
    favourite: contact.favourite,
  }

  const handleSubmitForm = async (values) => {
    const response = await api.contacts.update(id, values)
    if (response.status === 200) {
      // should update contact in redux store(using separate reducer) without refetching whole list
      if (response.data.favourite) {
        await dispatch(fetchContacts( { scope: contactsScopesKeys.FAVOURITES } ))
      }
      await dispatch(fetchContacts( { scope: contactsScopesKeys.ALL } ))
      history.push(`/contacts/${id}`)
    }
  }

  return (
    <LoadingContainer loading={loading}>
      <ContactForm
        initialValues={initialValues}
        handleSubmitForm={handleSubmitForm}
      />
    </LoadingContainer>
  )
}

export default ContactUpdate
