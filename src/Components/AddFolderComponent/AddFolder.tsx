import React, { useState } from 'react';
import CustomNavbar from '../navComponent/NavbarComponent';
import { Container, Row, Col,Form, Button, Toast } from 'react-bootstrap';
import heart from '../../assets/folderpic.png';
import { useNavigate } from 'react-router-dom';
import './AddFolder.css';

export default function AddFolder() {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const handleBackToHome = () => {
        navigate('/DashBoard')
    }
    return (
        <Container fluid>
                        <Row>
                <Col xs={6}>
                    <Toast className='addToast' onClose={() => setShow(false)} show={show} delay={3000} autohide>
                        <Toast.Header>
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                            />
                            <strong className="me-auto">Remember when</strong>
                            <small>1s ago</small>
                        </Toast.Header>
                        <Toast.Body>Folder has been added</Toast.Body>
                    </Toast>
                </Col>
            </Row>
            <Row>
                <Col>
                    <CustomNavbar />
                </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-center'>
                    <h2 className='addFolderTxt '>add your <p style={{color:'#848383'}} className='d-inline'>folder...</p></h2>
                </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-center'>
                    <img className='folderIMG' src={heart} alt='big heart with string'/>
                </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-center'>
                    <Form>
                    <Form.Group className="mb-3" controlId="Password">
                            <Form.Label className='inputTxt'>Folder Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Folder Name"
                                className='inputFolder'
                            />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            
            <Row>
                <Col className='d-flex justify-content-center folderBtnCol'>
                    <Button onClick={() => setShow(true)} className='folderBtn' variant=''>Add</Button>
                </Col>
                <Col className='d-flex justify-content-center folderBtnCol'>
                    <Button onClick={handleBackToHome} className='folderBtn' variant=''>Cancel</Button>
                </Col>
            </Row>
        </Container>
    )
}
