import React from 'react';
import './Header.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hook/useAuth';
// import useFirebase from './../../../hook/useFirebase';

const Header = () => {
    const {user, logout} = useAuth();
    return (
        <>
           <Navbar className="bg" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Travel</Navbar.Brand>
                    {/* http://themes.templatescoder.com/pizzon/html/demo/1-0/images/header-logo.png */}
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} className="text-light" to="/home">Home</Nav.Link>
                        {user?.email && <Nav.Link as={HashLink} className="text-light" to="/myOrder">MyOrder</Nav.Link>}
                        {user?.email && <Nav.Link as={HashLink} className="text-light" to="/addService">Add-Service</Nav.Link>}
                        <Navbar.Text><a href="#login" className="text-decoration-none p-2 text-warning"> {user?.displayName} </a> </Navbar.Text>
                        {user?.email ?
                            <Button onClick={logout} variant="primary">logOut</Button>
                            :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }

                        {/* <Navbar.Text><a href="#login" className="text-decoration-none ">  {user?.displayName}</a> </Navbar.Text> */}
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    );
};

export default Header;






