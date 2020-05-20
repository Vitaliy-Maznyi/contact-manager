import React from 'react'
import NavbarBootstrap from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'

const Navbar = () => {
  return (
    <NavbarBootstrap bg="primary" variant="dark" className='px-5 py-3 mb-5 justify-content-between'>
      <NavbarBootstrap.Brand href="/">Contact manager</NavbarBootstrap.Brand>
      <Button variant="success" href={'/contacts/new'}>Add contact</Button>
    </NavbarBootstrap>

  )
}

export default Navbar
