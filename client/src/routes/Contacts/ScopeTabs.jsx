import React  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CONTACTS_KEY } from 'store/storeKeys'
import { applyContactsScope } from 'modules/contacts'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { contactsScopes } from 'common/constants'

const ScopeTabs = () => {
  const key = useSelector(state => state[CONTACTS_KEY].scope)
  const dispatch = useDispatch()

  return (
    <Tabs
      id='contacts-scope-tabs'
      activeKey={key}
      onSelect={(key) => dispatch(applyContactsScope(key))}
    >
      {contactsScopes.map(({ key, title }) => (
        <Tab key={key} eventKey={key} title={title} />
      ))}
    </Tabs>
  )
}

export default ScopeTabs
