import React  from 'react'
import Spinner from 'react-bootstrap/Spinner'
import styles from './LoadingContainer.module.scss'

const LoadingContainer = ({ loading = false, children }) => {
  if (loading) return (
    <div className={styles.loadingContainer}>
      <Spinner animation='border' variant='primary' />
    </div>
  )

  return children
}

export default LoadingContainer
