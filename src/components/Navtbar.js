import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap'
import Navbarcss from '../styles/navbar.css'
import Maincss from '../styles/Main.css'
import { Redirect, withRouter } from "react-router-dom";
import React, { useState, Link, useEffect } from "react";
import firebase from "../fire";

const Navtbar = props => {
  const [userState, setuserState] = useState(null);
  const [checkingUserState, setCheckingUserState] = useState(true);

  useEffect(() => {
    firebase.getUserState().then(user => {
      if (user) {
        setuserState(user);
        

      }
      setCheckingUserState(false)
    })
  })


  const logout = () => {
    firebase.logout();
    setuserState(null);
   


  }

  let buttons;
  if (!checkingUserState) { 

  if (userState != null) {
      buttons = (
        <React.Fragment>
          <li><button className="butlogin" onClick={logout}>Logout</button></li>
        </React.Fragment>

      )
  } else {

    buttons = (
    <React.Fragment>
      <li><a className="butlogin" href="/Login">login</a></li>
    </React.Fragment>

    )
  }
}

  return (

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>Logo</Navbar.Brand>


      <Nav className="mr-auto">

      </Nav>
      <Nav>
        <NavDropdown title="Games" id="basic-nav-dropdown">
          <NavDropdown.Item href="/Adventurer">The Adventurer</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/">Em Breve</NavDropdown.Item>
          <NavDropdown.Item href="/">Em Breve</NavDropdown.Item>
          <NavDropdown.Item href="/">Em Breve</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/Creditos" class="ml-5" >Creditos</Nav.Link>
        <Nav.Link href="/home">Home</Nav.Link>
        <Form inline>
          <a>{buttons}</a>
        </Form>
      </Nav>
    </Navbar>
  )
}


export default Navtbar;