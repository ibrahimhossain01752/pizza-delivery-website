import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';
// import useFirebase from './../../../hook/useFirebase';

const Header = () => {
    const {user, logout} = useAuth();
    return (
        <>
           <Navbar className="navbar " bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      {/* <Nav.Link href="#myOrder">MyOrder</Nav.Link> */}
      <Link to="/myOrder">MyOrder</Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
     <Link to="/login">Login</Link>
     <span>{user.displayName}</span>
      {user?.email &&<button onClick={logout}>logout</button>}
    </Nav>
    </Container>
  </Navbar>  
        </>
    );
};

export default Header;