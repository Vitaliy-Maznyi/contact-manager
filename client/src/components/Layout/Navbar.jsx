import React from 'react'
import NavbarBootstrap from 'react-bootstrap/Navbar'

const Navbar = () => {
  return (
    <NavbarBootstrap bg="primary" variant="dark" className='px-5 py-3 mb-5'>
      <NavbarBootstrap.Brand href="/">Contact manager</NavbarBootstrap.Brand>
    </NavbarBootstrap>

  )
}

export default Navbar
