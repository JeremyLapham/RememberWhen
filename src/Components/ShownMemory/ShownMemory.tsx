import React, { useContext, useState } from 'react';
import './ShownMemory.css';
import CustomNavbar from '../navComponent/NavbarComponent';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import elephantLogo from '../../assets/elephantLogo.svg';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../context';
import { DeleteMemory } from '../Services/DataService';

export default function ShownMemory() {
    const [show, setShow] = useState(false);
    const { selectedMemory } = useContext(MyContext);
    const { setMemoryEdit } = useContext(MyContext);
    const { setIsMemoryEdit } = useContext(MyContext);

    const handleClose = () => setShow(false);

    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate('/dashboard');
    };

    const handleEditMemory = () => {
        setMemoryEdit({
            title: selectedMemory.title,
            id: selectedMemory.id,
            image: selectedMemory.image,
            tags: selectedMemory.tags,
            description: selectedMemory.description,
            date: selectedMemory.date

        });
        setIsMemoryEdit(true);
        setTimeout(() => {
            navigate('/addMemory');
        }, 500);
    }

    const handleDeleteMemory = async () => {
        await DeleteMemory(selectedMemory);
        navigate("/Dashboard");
    }

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
                                <Button className='confirmDeleteBtn' variant="" onClick={handleDeleteMemory}>
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
                    <h5 className='memoryName'>{selectedMemory.title}</h5>
                </Col>
            </Row>
            <Row>
                <Col>
                    <img className='phantLogo' src={elephantLogo} alt='Elephant logo but now hes in the memory that you clicked and is watching your every move' />
                </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-center'>
                    <img className='memoryImg' src={selectedMemory.image} alt='the picture of the memory that was selected' />
                </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-center'>
                    <div className='displayHashtags'>
                        <h2 className='hashtags'>{selectedMemory.tags}</h2>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-center'>
                    <div className='description'>
                        <h2 className='memoryDesTxt text-center'>{selectedMemory.description}</h2>
                        <h2 className='memoryDesDate text-center'>{selectedMemory.date}</h2>
                    </div>
                </Col>
            </Row>
            <Row className='rowMargin'>
                <Col className='d-flex justify-content-center'>
                    <Button onClick={handleEditMemory} className='editBtn' variant=''>Edit</Button>
                </Col>
                <Col className='d-flex justify-content-center'>
                    <Button onClick={() => { setShow(true); }} className='deleteBtn' variant=''>Delete</Button>
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
