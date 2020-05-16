import React from 'react'
import cx from 'classnames'
import { Link } from 'react-router-dom'
import { useFetch } from 'hooks'
import { Layout } from 'components'
import {
  List,
  ListItem,
} from 'ui-kit'

import api from 'api'
import typography from 'styles/typography.module.scss'
import styles from './Contacts.module.scss'

const Contacts = () => {
  const [contacts, loading] = useFetch({
    fetchMethod: api.contacts.all,
    defaultResponse: [],
  })

  if (loading) return (<h1>Loading...</h1>)

  const nameClassnames = cx(typography.paragraph, styles.contact)

  return (
    <Layout>
      <List>
        {contacts.map((contact) => (
          <ListItem key={contact.id}>
            <Link to={`contacts/${contact.id}`}>
              <div className={nameClassnames}>{`${contact.first_name} ${contact.last_name || ''}`}</div>
            </Link>
          </ListItem>
        ))}
      </List>
    </Layout>
  )
}

export default Contacts
