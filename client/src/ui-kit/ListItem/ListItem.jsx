import React from 'react'
import styles from './ListItem.module.scss'

const ListItem = ({ children }) => (
  <li className={styles.listItem}>
    {children}
  </li>
)

export default ListItem
