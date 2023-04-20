import React, { useContext, useState } from 'react';
import CustomNavbar from '../navComponent/NavbarComponent';
import { Container, Row, Col,Form, Button, Toast } from 'react-bootstrap';
import heart from '../../assets/folderpic.png';
import { useNavigate } from 'react-router-dom';
import './AddFolder.css';
import { MyContext } from '../context';
import { Folder } from '../Services/DataService';


export default function AddFolder() {
    const { usersId } = useContext(MyContext);
    const { folderId } = useContext(MyContext);
    const { setFolderId } = useContext(MyContext);

    const [show, setShow] = useState(false);
    const [folderName, setFolderName] = useState('');
    const [editBool, setEdit] = useState(false);

    const navigate = useNavigate();

    const handleBackToHome = () => {
        navigate('/DashBoard')
    }
    const handleName = ({ target }) => setFolderName(target.value);


    const handleFolder = async () => {
        const fold = {
            Id : folderId,
            userId : usersId,
            name : folderName,
            isDeleted: false
        }
        let result = false;
        if (editBool) {
            // result = await updateMemoryItem(fold);
        } else {
            result = await Folder(fold);
        }

        // if (result) {
        //     let userMemoryItems = await getMemoryItemsByUserId(usersId);
        //     setMemoryItems(userMemoryItems);
        // } else {
        //     alert(`Blog Item was not ${editBool ? 'Updated' : 'Added'}`)
        // }
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
                                onChange={handleName}
                            />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            
            <Row>
                <Col className='d-flex justify-content-center'>
                    <Button onClick={handleFolder} className='folderBtn' variant=''>Add</Button>
                </Col>
                <Col className='d-flex justify-content-center'>
                    <Button onClick={handleBackToHome} className='folderBtn' variant=''>Cancel</Button>
                </Col>
            </Row>
        </Container>
    )
}
