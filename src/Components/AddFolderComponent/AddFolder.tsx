import React, { useContext, useState } from 'react';
import CustomNavbar from '../navComponent/NavbarComponent';
import { Container, Row, Col, Form, Button, Toast } from 'react-bootstrap';
import heart from '../../assets/folderpic.png';
import { useNavigate } from 'react-router-dom';
import './AddFolder.css';
import { MyContext } from '../context';
import { Folder, updateFolder } from '../Services/DataService';


export default function AddFolder() {
    const { usersId } = useContext(MyContext);
    const { folderId } = useContext(MyContext);
    const { isEditFolder } = useContext(MyContext);
    const { folderEdit } = useContext(MyContext);

    const [show, setShow] = useState(false);
    const [folderName, setFolderName] = useState(isEditFolder ? folderEdit.name : '');

    const navigate = useNavigate();

    const handleBackToHome = () => {
        navigate('/DashBoard')
    }

    const handleName = ({ target }) => setFolderName(target.value);


    const handleFolder = async () => {
        let result = false;
        if (isEditFolder) {
            const fold = {
                Id: folderEdit.id,
                userId: usersId,
                name: folderName,
                isDeleted: false
            }
            result = await updateFolder(fold);
        } else {
            const fold = {
                userId: usersId,
                name: folderName,
                isDeleted: false
            }
            result = await Folder(fold);
        }
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
                    <h2 className='addFolderTxt '>add your <p style={{ color: '#848383' }} className='d-inline'>folder...</p></h2>
                </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-center'>
                    <img className='folderIMG' src={heart} alt='big heart with string' />
                </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-center'>
                    <Form>
                        <Form.Group className="mb-3" controlId="FolderName">
                            <Form.Label className='inputTxt'>Folder Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Folder Name"
                                className='inputFolder'
                                onChange={handleName}
                                value={folderName}
                            />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>

            <Row className='d-flex justify-content-center desktopAddRow2'>
                <Col md={3} className='d-flex justify-content-center folderBtnCol'>
                    <Button onClick={handleFolder} className='addfolderBtn' variant=''>{isEditFolder ? 'Update' : 'Add'}</Button>
                </Col>
                <Col md={3} className='d-flex justify-content-center folderBtnCol'>
                    <Button onClick={handleBackToHome} className='cancelfolderBtn' variant=''>Cancel</Button>
                </Col>
            </Row>

            {/* <Row className='d-flex justify-content-center desktopAddRow2'>
                <Col lg={2} className='d-flex justify-content-center folderBtnCol'>
                    <Button onClick={() => setShow(true)} className='addfolderBtn' variant=''>Add</Button>
                </Col>
                <Col lg={2} className='d-flex justify-content-center folderBtnCol'>
                    <Button onClick={handleBackToHome} className='cancelfolderBtn' variant=''>Cancel</Button>
                </Col>
            </Row> */}
        </Container>
    )
}
