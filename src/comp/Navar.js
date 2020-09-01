import React from 'react'

import '../App.css';
import { Button, Navbar, Form, Nav, FormControl } from 'react-bootstrap';
export default function Navar() {
  return (

    <div className='top'>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="./home">
          <img className="Logo" src={require('../logo.png')} alt="logo" />


        </Navbar.Brand>



        <Nav className="mr-auto" >

          <Nav.Link href="home" >Home</Nav.Link>

          <Nav.Link href="store" >Store</Nav.Link>
          <Nav.Link href="blog">Blog</Nav.Link>
          <Nav.Link href="cart">Cart</Nav.Link>
        </Nav>
        <div className="quote"><h5 style={{ color: 'white' }}>"Next-Door-Neighbour"</h5></div>
        <Form inline className="Haa">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
        <Button href="signin " variant="outline-info" className="Buton">SignIn</Button>
      </Navbar>
    </div>

  )
}
