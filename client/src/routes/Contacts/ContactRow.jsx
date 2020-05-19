import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Badge from 'react-bootstrap/Badge'
import styles from './ContactRow.module.scss'

const ContactRow = ({ contact }) => {
  return (
    <ListGroup.Item
      key={contact.id}
      variant="light"
      href={`contacts/${contact.id}`}
      action
    >
      <div className={styles.contactRowContainer}>
        <div>{`${contact.first_name} ${contact.last_name || ''}`}</div>
        {contact.favourite && <Badge variant="success" pill>Favourite</Badge>}
      </div>
    </ListGroup.Item>
  )
}

export default ContactRow
