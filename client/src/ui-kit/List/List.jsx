import React from 'react'
import styles from './List.module.scss'

const List = ({ children }) => (
  <ul className={styles.list}>
    {children}
  </ul>
)

export default List
