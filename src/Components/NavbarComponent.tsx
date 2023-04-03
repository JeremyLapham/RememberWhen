import React, { useState } from 'react'
import "./NavbarStyle.css";
import { Col, Container, Row, Navbar, Offcanvas, Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import home from '../assets/home.svg';
import setting from '../assets/setting.svg';
import addnew from '../assets/addnew.svg';
import memories from '../assets/memories.svg';

export default function CustomNavbar() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <Navbar expand="md" className="navbar-container">
            <Container fluid>
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    className={`hamburger ${isActive ? "active" : ""} border-0`}
                    onClick={handleClick}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </Navbar.Toggle>
                <Offcanvas
                    show={isActive}
                    onHide={() => setIsActive(false)}
                    placement="start"
                    className="offCanvas w-50"
                >
                    <Offcanvas.Body className="offCanvasBody">
                        <div style={{ marginLeft: '1rem' }}>
                            <Nav.Link as={Link} to='/DashBoard'><img src={home} alt='home picture' />
                                <h1 className='navWords d-inline'>Home</h1></Nav.Link>
                        </div>
                        <div style={{ marginLeft: '0.9rem' }}>
                            <img src={setting} alt='setting picture' />
                            <h1 className='navWords d-inline'>Setting</h1>
                        </div>
                        <div style={{ marginLeft: '0.8rem' }}>
                            <Nav.Link as={Link} to='/AddMemory'><img src={addnew} alt='addnew picture' />
                                <h1 className='navWords d-inline'>Add Memory</h1></Nav.Link>
                        </div>
                        <div style={{ marginLeft: '0.9rem' }}>
                            <img src={memories} alt='memories picture' />
                            <h1 className='navWords d-inline'>Memories</h1>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </Container>
        </Navbar>
    );
}