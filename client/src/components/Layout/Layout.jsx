import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from './Navbar'

const Layout = ({ children }) => (
  <>
    <Navbar />
    <Container>
      {children}
    </Container>
  </>
)

export default Layout
