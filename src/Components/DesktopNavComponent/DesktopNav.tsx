<<<<<<< HEAD
import React from 'react'
=======
import React, {useContext, useState} from 'react'
>>>>>>> 5251a62403ffa9fa8ee1529971a4a0345ec7defd
import "./DesktopNav.css";
import { Navbar, Button, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navlogo from '../../assets/elephantLogo.svg';
<<<<<<< HEAD

export default function DesktopNav() {
=======
import { MyContext } from '../context';

export default function DesktopNav() {
    const [isActive, setIsActive] = useState(false);

    const { setMoreMemoryClicked } = useContext(MyContext);
    const { setIsEditFolder } = useContext(MyContext);
    const { setIsMemoryEdit } = useContext(MyContext);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    const handleMemoryClick = () => {
        setMoreMemoryClicked(false);
        setIsActive(!isActive);
    }
    const handleMoreMemoryClick = () => {
        setMoreMemoryClicked(true);
        setIsActive(!isActive);
    }
>>>>>>> 5251a62403ffa9fa8ee1529971a4a0345ec7defd
    return (
        <Navbar className='desktopNavbar'>
            <img src={Navlogo} className='navLogo'></img>
            <h1 className='navTitle'>Remember When...</h1>
            <Row className='navRow'>
                <Col md={2}>
<<<<<<< HEAD
                    <Nav.Link as={Link} to='/DashBoard'>
=======
                    <Nav.Link as={Link} to='/DashBoard' onClick={handleMemoryClick}>
>>>>>>> 5251a62403ffa9fa8ee1529971a4a0345ec7defd
                        <Button className='navBtn'>Home</Button>
                    </Nav.Link>
                </Col>
                <Col md={2} className='borderCol'>
<<<<<<< HEAD
                    <Nav.Link as={Link} to='/Logout'>
=======
                    <Nav.Link as={Link} to='/Settings'>
>>>>>>> 5251a62403ffa9fa8ee1529971a4a0345ec7defd
                        <Button className='navBtn'>Setting</Button>
                    </Nav.Link>
                </Col>
                <Col md={3}>
<<<<<<< HEAD
                    <Nav.Link as={Link} to='/AddMemory'>
=======
                    <Nav.Link as={Link} to='/AddMemory' onClick={() => setIsMemoryEdit(false)}>
>>>>>>> 5251a62403ffa9fa8ee1529971a4a0345ec7defd
                        <Button className='navBtn'>Add Memory</Button>
                    </Nav.Link>
                </Col>
                <Col md={3} className='borderCol'>
<<<<<<< HEAD
                    <Nav.Link as={Link} to='/AddFolder'>
=======
                    <Nav.Link as={Link} to='/AddFolder' onClick={() => setIsEditFolder(false)}>
>>>>>>> 5251a62403ffa9fa8ee1529971a4a0345ec7defd
                        <Button className='navBtn'>Add Folder</Button>
                    </Nav.Link>
                </Col>
                <Col md={2}>
<<<<<<< HEAD
                    <Nav.Link as={Link} to='/ShownMemory'>
=======
                    <Nav.Link as={Link} to='/DashBoard' onClick={handleMoreMemoryClick}>
>>>>>>> 5251a62403ffa9fa8ee1529971a4a0345ec7defd
                        <Button className='navBtn'>Memories</Button>
                    </Nav.Link>
                </Col>
            </Row>
        </Navbar>
    )
<<<<<<< HEAD
}
=======
}
>>>>>>> 5251a62403ffa9fa8ee1529971a4a0345ec7defd
