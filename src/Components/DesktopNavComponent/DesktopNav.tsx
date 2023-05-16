import React, {useContext, useState} from 'react'
import "./DesktopNav.css";
import { Navbar, Button, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navlogo from '../../assets/elephantLogo.svg';
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
    return (
        <Navbar className='desktopNavbar'>
            <img src={Navlogo} className='navLogo'></img>
            <h1 className='navTitle'>Remember When...</h1>
            <Row className='navRow'>
                <Col md={2}>
                    <Nav.Link as={Link} to='/DashBoard' onClick={handleMemoryClick}>
                        <Button className='navBtn'>Home</Button>
                    </Nav.Link>
                </Col>
                <Col md={3} className='borderCol'>
                    <Nav.Link as={Link} to='/AddMemory'>
                        <Button className='navBtn'>Add Memory</Button>
                    </Nav.Link>
                </Col>
                <Col md={3}>
                    <Nav.Link as={Link} to='/AddFolder' onClick={() => setIsMemoryEdit(false)}>
                        <Button className='navBtn'>Add Folder</Button>
                    </Nav.Link>
                </Col>
                <Col md={3} className='borderCol'>
                    <Nav.Link as={Link} to='/DashBoard' onClick={() => setIsEditFolder(false)}>
                        <Button className='navBtn'>Memories</Button>
                    </Nav.Link>
                </Col>
                <Col md={1}>
                    <Nav.Link as={Link} to='/Settings' onClick={handleMoreMemoryClick}>
                        <Button className='navBtn'>Logout</Button>
                    </Nav.Link>
                </Col>
            </Row>
        </Navbar>
    )
}