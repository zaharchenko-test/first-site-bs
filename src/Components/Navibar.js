import React , { useState } from 'react';
import {Navbar ,Nav , Button ,Container , Modal , Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


const Styles = styled.div`
    a, .navbar-brand, navbar-nav, nav-link{
        color: #adb1b8;
        &:hover{
            color: #fff;
        }
    }
`


export default function NaviBar() {
    
    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    
  return(
    <>  
    <Styles>
        <Navbar className="fixed-top" collapseOnSelect expand="md" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>WebDev Blog</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link><Link to="/">Home</Link></Nav.Link>
                    <Nav.Link><Link to="/users">Users</Link></Nav.Link>
                    <Nav.Link><Link to="/about">About</Link></Nav.Link>
                </Nav>
                <Nav>
                    <Button variant="outline-info" className="mx-1 my-1" onClick={handleShow}>log in</Button>
                    <Button variant="outline-info" className="mx-1 my-1" onClick={handleShow}>sign out</Button>
                </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </Styles>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>log in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group controlId="fromBasicEmail">
                    <Form.Label>
                        Email adress
                    </Form.Label>
                    <Form.Control type="email" placeholder="enter email"/>
                    <Form.Text className="text-muted">text-muted">lorem insum dolor sit hamet</Form.Text>
                </Form.Group>
                 <Form.Group controlId="fromBasicPassword">
                    <Form.Label>
                        password
                    </Form.Label>
                    <Form.Control type="password" placeholder="enter password"/>
                    <Form.Text className="text-muted">lorem insum dolor sit hamet</Form.Text>
                </Form.Group>
                <Form.Group controlId="fromBasicCheckbox">
                    
                    <Form.Check type="checkbox" className="" label="remember my" custom/>
                    
                </Form.Group>
            </Form>
        </Modal.Body>
    </Modal>
    
    </>
)}
