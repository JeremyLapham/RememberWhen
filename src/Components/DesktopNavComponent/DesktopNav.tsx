import React from 'react'
import "./DesktopNav.css";
import { Navbar, Button, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navlogo from '../../assets/elephantLogo.svg';

export default function DesktopNav() {
    return (
        <Navbar className='desktopNavbar'>
            <img src={Navlogo} className='navLogo'></img>
            <h1 className='navTitle'>Remember When...</h1>
            <Row className='navRow'>
                <Col md={2}>
                    <Nav.Link as={Link} to='/DashBoard'>
                        <Button className='navBtn'>Home</Button>
                    </Nav.Link>
                </Col>
                <Col md={2} className='borderCol'>
                    <Nav.Link as={Link} to='/Logout'>
                        <Button className='navBtn'>Setting</Button>
                    </Nav.Link>
                </Col>
                <Col md={3}>
                    <Nav.Link as={Link} to='/AddMemory'>
                        <Button className='navBtn'>Add Memory</Button>
                    </Nav.Link>
                </Col>
                <Col md={3} className='borderCol'>
                    <Nav.Link as={Link} to='/AddFolder'>
                        <Button className='navBtn'>Add Folder</Button>
                    </Nav.Link>
                </Col>
                <Col md={2}>
                    <Nav.Link as={Link} to='/ShownMemory'>
                        <Button className='navBtn'>Memories</Button>
                    </Nav.Link>
                </Col>
            </Row>
        </Navbar>
    )
}
