import React, { useContext, useState } from 'react';
import CustomNavbar from '../navComponent/NavbarComponent';
import { Container, Row, Col, Form, Button, Toast, Modal } from 'react-bootstrap';
import heart from '../../assets/folderpic.png';
import { useNavigate } from 'react-router-dom';
import './AddFolder.css';
import { MyContext } from '../context';
import { Folder, updateFolder } from '../Services/DataService';
import swal from 'sweetalert';
import DesktopNav from '../DesktopNavComponent/DesktopNav';

export default function AddFolder() {
    const { usersId } = useContext(MyContext);
    const { isEditFolder } = useContext(MyContext);
    const { folderEdit } = useContext(MyContext);
    const { setSelectedFolder } = useContext(MyContext);
    const { setFromAddFolder } = useContext(MyContext);

    const [showModal, setShowModal] = useState(false);
    const [folderName, setFolderName] = useState(isEditFolder ? folderEdit.name : '');

    const navigate = useNavigate();

    const handleBackToHome = () => {
        navigate('/DashBoard')
    }

    const handleName = ({ target }) => setFolderName(target.value);


    const handleFolder = async () => {
        if (folderName === '') {
            swal("Please enter a name for your folder");
        } else {
            let result = false;
            if (isEditFolder) {
                const fold = {
                    Id: folderEdit.id,
                    userId: usersId,
                    name: folderName,
                    isDeleted: false
                }
                setSelectedFolder(fold);
                result = await updateFolder(fold);
                setTimeout(() => {
                    navigate('/dashboard');
                }, 2000);
            } else {
                const fold = {
                    id: 0,
                    userId: usersId,
                    name: folderName,
                    isDeleted: false
                }
                setSelectedFolder(fold);
                setFromAddFolder(true);
                result = await Folder(fold);
            }
            if (result) {
                setShowModal(true);
            } else {
                alert('Something went wrong and your folder wasn\'t made or updated');
            }
        }
    }

    const handleClose = () => setShowModal(false);

    const handleViewFolder = async () => {
        navigate('/ClickedFolder');
    }
    return (
        <Container fluid>
            <Row>
                <Modal className='modalBG' show={showModal} onHide={handleClose}>
                    <Modal.Body className='modalBody'>
                        <Row>
                            <Col className='d-flex justify-content-center'>
                                <p className='modalTxt'>Your folder was {folderEdit ? 'Edited' : 'added'}</p>
                            </Col>
                        </Row>
                        <Row>
                        {folderEdit ? '' : 
                            <Col className='d-flex justify-content-center'>
                                <Button className='viewBtn' variant="" onClick={handleViewFolder}>
                                    View
                                </Button>
                            </Col>
                            }
                        </Row>
                    </Modal.Body>
                </Modal>
            </Row>
            <Row>
                <Col>
                    <CustomNavbar />
                    <DesktopNav />
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

            <Row>
                <Col className='d-flex justify-content-end'>
                    {isEditFolder ?
                        <Button onClick={() => { handleFolder(); setShowModal(true); }} className='addBtn' variant=''>Update</Button>
                        :
                        <Button onClick={() => { handleFolder(); }} className='addBtn' variant=''>Add</Button>
                    }
                </Col>
                <Col className='d-flex justify-content-start'>
                    <Button onClick={handleBackToHome} className='cancelfolderBtn' variant=''>Cancel</Button>
                </Col>
            </Row>
        </Container>
    )
}
