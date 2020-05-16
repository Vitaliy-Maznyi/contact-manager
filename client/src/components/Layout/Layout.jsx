import React from 'react'
import styles from './Layout.module.scss'

const Layout = ({ children }) => (
  <div className={styles.contentContainer}>
    {children}
  </div>
)

export default Layout
