import React, { useState } from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { contactsScopes, contactsScopesKeys } from 'common/constants'

const ScopeTabs = () => {
  const [key, setKey] = useState(contactsScopesKeys.ALL);

  return (
    <Tabs
      activeKey={key}
      onSelect={setKey}
    >
      {contactsScopes.map(({ key, title }) => (
        <Tab key={key} eventKey={key} title={title} />
      ))}
    </Tabs>
  )
}

export default ScopeTabs
