import React from 'react'
import "./DesktopNav.css";
import { Navbar, Button, Row, Col } from 'react-bootstrap';
import Navlogo from '../../assets/elephantLogo.svg';

export default function DesktopNav() {
    return (
        <Navbar className='desktopNavbar'>
            <img src={Navlogo} className='logo'></img>
            <h1 className='navTitle'>Remember When...</h1>
            <Row className='navRow'>
                <Col md={2}>
                    <Button className='navBtn'>Home</Button>
                </Col>
                <Col md={2}>
                    <Button className='navBtn'>Setting</Button>
                </Col>
                <Col md={3}>
                    <Button className='navBtn'>Add Memory</Button>
                </Col>
                <Col md={3}>
                    <Button className='navBtn'>Add Folder</Button>
                </Col>
                <Col md={2}>
                    <Button className='navBtn'>Memories</Button>
                </Col>
            </Row>
        </Navbar>
    )
}
