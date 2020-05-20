import React, {useEffect} from 'react'
import api from 'api'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { fetchContacts } from 'modules/contacts'
import { ContactForm } from 'components'
import { contactsScopesKeys } from 'common/constants'

const ContactNew = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const initialValues = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    favourite: false,
  }

  const handleSubmitForm = async (values) => {
    const response = await api.contacts.create(values)
    if (response.status === 200) {
      // should add new contact to redux store(using separate reducer) without refetching whole list
      if (response.data.favourite) {
        await dispatch(fetchContacts( { scope: contactsScopesKeys.FAVOURITES } ))
      }
      await dispatch(fetchContacts( { scope: contactsScopesKeys.ALL } ))
      history.push('/')
    }
  }
  return (
    <ContactForm
      initialValues={initialValues}
      handleSubmitForm={handleSubmitForm}
    />
  )
}

export default ContactNew
