import React, { useState } from 'react';
import { Col, Container, Navbar, Offcanvas, Row } from 'react-bootstrap';
import home from '../../assets/home.svg';
import setting from '../../assets/setting.svg';
import addnew from '../../assets/addnew.svg';
import memories from '../../assets/memories.svg';
import addBtn from '../../assets/PlusCircle.png';

export default function AddMemory() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileSelect = (e) => {
        setSelectedFile(e.target.files[0]);
    };
    return (
        <Container fluid>
            {[false].map((expand) => (
                <Navbar key={expand} expand={expand} className="mb-3">
                    <Container fluid>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="start" className='offCanvas w-50'>
                            <Offcanvas.Body className='offCanvasBody'>
                                <div style={{ marginLeft: '1rem' }}>
                                    <img src={home} alt='home picture' />
                                    <h1 className='navWords d-inline'>Home</h1>
                                </div>
                                <div style={{ marginLeft: '1rem' }}>
                                    <img src={setting} alt='setting picture' />
                                    <h1 className='navWords d-inline'>Setting</h1>
                                </div>
                                <div style={{ marginLeft: '1rem' }}>
                                    <img src={addnew} alt='addnew picture' />
                                    <h1 className='navWords d-inline'>Add new</h1>
                                </div>
                                <div style={{ marginLeft: '1rem' }}>
                                    <img src={memories} alt='memories picture' />
                                    <h1 className='navWords d-inline'>Memories</h1>
                                </div>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
            <Row>
                <Col>
                    <label htmlFor="custom-input">Add images</label>
                    <input type="file" id="custom-input" onChange={handleFileSelect} style={{ display: 'none' }} />
                </Col>
            </Row>
        </Container>
    )
}
