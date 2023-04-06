import React, { useState } from 'react';
import './ShownMemory.css';
import CustomNavbar from '../navComponent/NavbarComponent';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import elephantLogo from '../../assets/elephantLogo.svg';
import memory from '../../assets/memory.jpg';
import { useNavigate } from 'react-router-dom';

export default function ShownMemory() {
    const [show, setShow] = useState(false);
    const [editDelete, setEditDelete] = useState('')

    const editOrDelte = () => {
        console.log(editDelete)
    }

    const handleClose = () => setShow(false);

    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate(-1);
    };

    return (
        <Container fluid>
            <Row>
                <Modal className='modalBG' show={show} onHide={handleClose}>
                    <Modal.Body className='modalBody'>
                        <Row>
                            <Col className='d-flex justify-content-center'>
                        <p className='modalTxt'>Are you sure you want to delete this memory?</p>
                            </Col>
                        </Row>
                        <Row>

                        <Col className='d-flex justify-content-center'>
                            <Button className='confirmDeleteBtn' variant="" onClick={handleClose}>
                                Delete
                            </Button>
                        </Col>
                        <Col className='d-flex justify-content-center'>
                            <Button className='cancelDelete' variant="" onClick={handleClose}>
                                Cancel
                            </Button>
                        </Col>
                        </Row>
                    </Modal.Body>
                </Modal>
            </Row>
            <CustomNavbar />
            <Row>
                <Col className='text-center'>
                    <h1 className='memoryRemember'>remember...</h1>
                </Col>
            </Row>
            <Row>
                <Col className='text-center'>
                    <h5 className='memoryName'>Brunch Date</h5>
                </Col>
            </Row>
            <Row>
                <Col>
                    <img className='phantLogo' src={elephantLogo} alt='Elephant logo but now hes in the memory that you clicked and is watching your every move' />
                </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-center'>
                    <img className='memoryImg' src={memory} alt='the picture of the memory that was selected' />
                </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-center'>
                    <div className='displayHashtags'>
                        <h2 className='hashtags'>#Brunch #FavSpot #Yum #Food #Replay</h2>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-center'>
                    <div className='description'>
                        <h2 className='memoryDesTxt text-center'>This will either be a very long or very short
                            description on how the day went. It can
                            also be a caption or anything the user wants
                            it to be. This will either be a very long or very short
                            description on how the day went. It can
                            also be a caption or anything the user wants
                            it to be.</h2>
                        <h2 className='memoryDesDate text-center'>3/14/23</h2>
                    </div>
                </Col>
            </Row>
            <Row className='rowMargin'>
                <Col className='d-flex justify-content-center'>
                    <Button onClick={() => navigate('/addmemory')} className='editBtn' variant=''>Edit</Button>
                </Col>
                <Col className='d-flex justify-content-center'>
                    <Button onClick={() => {setShow(true);}} className='deleteBtn' variant=''>Delete</Button>
                </Col>
                <Col className='d-flex justify-content-center'>
                    <Button className='shareBtn' variant=''>Share</Button>
                </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-center'>
                    <Button onClick={handleBackButtonClick} className='backBtn' variant=''>Back</Button>
                </Col>
            </Row>
        </Container>
    )
}
