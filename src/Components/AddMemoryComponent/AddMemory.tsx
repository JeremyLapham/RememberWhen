import React, { useState } from 'react';
import { Col, Container, Navbar, Offcanvas, Row,  Button, Form } from 'react-bootstrap';
import home from '../../assets/home.svg';
import setting from '../../assets/setting.svg';
import addnew from '../../assets/addnew.svg';
import memories from '../../assets/memories.svg';
import sound from '../../assets/sound.png';
import './AddMemory.css';

export default function AddMemory() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedAudio, setSelectedAudio] = useState('');

    const handleFileSelect = (e) => {
        setSelectedImage(e.target.files[0]);
    };

    const handleAudio = () => {
        setSelectedAudio(sound)
    };

    return (
        <Container fluid>
            {[false].map((expand, idx) => (
                <Navbar key={idx} expand={expand} className="mb-3">
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
                    <Form.Group className="mb-3 d-flex flex-column align-items-center" controlId="Image">
                        <Form.Label>Add image</Form.Label>
                        <Button style={{ position: 'relative' }} id='custom-input'>
                            {selectedImage && <img className='selectedImg' src={URL.createObjectURL(selectedImage)} alt="Selected image" />}
                            <Form.Control className='input1' onChange={handleFileSelect} type="file" accept='image/png, image/jpg' placeholder="Enter an image" />
                        </Button>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3 d-flex flex-column align-items-center">
                        <Form.Label>Add audio</Form.Label>
                        <Button style={{ position: 'relative' }} id='custom-input2'>
                            {selectedAudio && <img className='selectedImg2' src={selectedAudio} alt="Selected image" />}
                            <Form.Control className='input2' onChange={handleAudio} type='file' accept='audio/mp3' />
                        </Button>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3 d-flex flex-column align-items-center">
                        <Form.Label>Folder</Form.Label>
                        <Form.Select className='textInputs'>
                            <option hidden>Folder</option>
                            <option >Dates</option>
                            <option >Trips</option>
                            <option >Camping</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3 d-flex flex-column align-items-center">
                        <Form.Label>Memory Title</Form.Label>
                        <Form.Control className='textInputs' type='text' placeholder='Memory Title' />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3 d-flex flex-column align-items-center">
                        <Form.Label>Date</Form.Label>
                        <Form.Control className='textInputs' type='text' placeholder='Date' />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3 d-flex flex-column align-items-center">
                        <Form.Label>Description</Form.Label>
                        <Form.Control className='textInputs' placeholder='Description' />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-center'>
                    <Button className='addCancelBtn' variant=''>Add</Button>
                </Col>
                <Col className='d-flex justify-content-center'>
                    <Button className='addCancelBtn' variant=''>Cancel</Button>
                </Col>
            </Row>
        </Container>
    );
}
