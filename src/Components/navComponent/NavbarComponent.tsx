import React, { useContext, useState } from 'react'
import "./NavbarStyle.css";
import { Container, Navbar, Offcanvas, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import home from '../../assets/home.svg';
import setting from '../../assets/setting.svg';
import addnew from '../../assets/addnew.svg';
import memories from '../../assets/memories.svg';
import { MyContext } from '../context';

export default function CustomNavbar() {
    const [isActive, setIsActive] = useState(false);

    const { setMoreMemoryClicked } = useContext(MyContext);

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
        <Navbar expand="md" className="navbar-container">
            <Container fluid>
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    className={`hamburger border-0`}
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
                    className="offCanvas"
                >
                    <Offcanvas.Body className="offCanvasBody">
                        <div style={{ marginLeft: '25px' }}>
                            <Nav.Link as={Link} to='/DashBoard' onClick={handleMemoryClick}><img src={home} alt='home picture' />
                                <h1 className='navWords d-inline'>Home</h1></Nav.Link>
                        </div>
                        <div style={{ marginLeft: '24px' }}>
                            <Nav.Link as={Link} to='/Settings'><img src={setting} alt='home picture' />
                                <h1 className='navWords d-inline'>Settings</h1></Nav.Link>
                        </div>
                        <div style={{ marginLeft: '21px' }}>
                            <Nav.Link as={Link} to='/AddMemory'><img src={addnew} alt='addnew picture' />
                                <h1 className='navWords d-inline'>Add Memory</h1></Nav.Link>
                        </div>
                        <div style={{ marginLeft: '21px' }}>
                            <Nav.Link as={Link} to='/AddFolder'><img src={addnew} alt='addnew picture' />
                                <h1 className='navWords d-inline'>Add Folder</h1></Nav.Link>
                        </div>
                        <div style={{ marginLeft: '22px' }}>
                            <Nav.Link as={Link} to='/DashBoard' onClick={handleMoreMemoryClick}><img src={memories} alt='home picture' />
                                <h1 className='navWords d-inline'>Memories</h1></Nav.Link>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </Container>
        </Navbar>
    );
}