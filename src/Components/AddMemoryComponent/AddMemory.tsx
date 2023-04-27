import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row, Button, Form, Toast } from 'react-bootstrap';
import './AddMemory.css';
import { useNavigate } from 'react-router-dom';
import CustomNavbar from '../../Components/navComponent/NavbarComponent';
import { addMemoryItem, getMemoryItemsByUserId, updateMemoryItem, getFolderByUserId } from '../Services/DataService';
import { MyContext } from '../context';

export default function AddMemory() {
    const { usersId } = useContext(MyContext);
    const { folderId } = useContext(MyContext);
    const { setMemoryItems } = useContext(MyContext);
    const { setFolderId } = useContext(MyContext);

    const navigate = useNavigate()
    const [show, setShow] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    // const [selectedAudio, setSelectedAudio] = useState('');

    const [memoryImage, setMemoryImage] = useState('');
    const [memoryTitle, setMemoryTitle] = useState('');
    const [memoryDescription, setMemoryDescription] = useState('');
    const [memoryTags, setMemoryTags] = useState('');
    const [memoryDate, setMemoryDate] = useState('');
    const [memoryId, setMemoryId] = useState(0);
    const [memoryPublisherName, setPublisherName] = useState('');
    const [folders, setFolders] = useState([]);

    const [editBool, setEdit] = useState(false);


    const handleTitle = ({ target }) => setMemoryTitle(target.value);
    const handleDescription = ({ target }) => setMemoryDescription(target.value);
    const handleFolder = ({ target: { value } }) => setFolderId(value);
    const handleTags = ({ target }) => setMemoryTags(target.value);
    const handleDate = ({ target }) => setMemoryDate(target.value);

    const handleImage = (e: any) => {
        let file = e.target.files[0];
        const reader: any = new FileReader();
        reader.onloadend = () => {
            setMemoryImage(reader.result);
        }
        reader.readAsDataURL(file);
        setSelectedImage(e.target.files[0]);
    }

    // const handleAudio = () => {
    //     setSelectedAudio(sound)
    // };

    const handleSave = async () => {
        const item = {
            Id: memoryId,
            Userid: usersId,
            FolderId: folderId, //figure out how to make this change based on the folder that the user set
            PublishedName: memoryPublisherName,
            Title: memoryTitle,
            Image: memoryImage,
            Description: memoryDescription,
            Date: memoryDate,
            Tags: memoryTags,
            Category: '',
            isPublished: true,
            isDeleted: false
        }
        let result = false;
        if (editBool) {
            result = await updateMemoryItem(item);
        } else {
            result = await addMemoryItem(item);
        }

        if (result) {
            let userMemoryItems = await getMemoryItemsByUserId(usersId);
            setMemoryItems(userMemoryItems);
        } else {
            alert(`Blog Item was not ${editBool ? 'Updated' : 'Added'}`)
        }
    }

    useEffect(() => {
        const GetFolders = async () => {
            let displayFolder = await getFolderByUserId(usersId);
            setFolders(displayFolder);
            setFolderId(displayFolder.id);
        }
        GetFolders()
    }, []);

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
                        <Toast.Body>Memory has been added</Toast.Body>
                    </Toast>
                </Col>
            </Row>
            <CustomNavbar />
            <Row className='desktopInfoRow'>
                <Col className='firstInfoCol'>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3 d-flex flex-column align-items-center" controlId="Image">
                                <Form.Label className='addImgTxt'>Add image</Form.Label>
                                <Button style={{ position: 'relative' }} id='custom-input'>
                                    {selectedImage && <img className='selectedImg' src={URL.createObjectURL(selectedImage)} alt="Selected image" />}
                                    <Form.Control className='input1' onChange={handleImage} type="file" accept='image/png, image/jpg' placeholder="Enter an image" />
                                </Button>
                            </Form.Group>
                        </Col>
                    </Row>
                    {/* <Row>
                <Col>
                    <Form.Group className="mb-3 d-flex flex-column align-items-center">
                        <Form.Label>Add audio</Form.Label>
                        <Button style={{ position: 'relative' }} id='custom-input2'>
                            {selectedAudio && <img className='selectedImg2' src={selectedAudio} alt="Selected image" />}
                            <Form.Control className='input2' onChange={handleAudio} type='file' accept='audio/mp3' />
                        </Button>
                    </Form.Group>
                </Col>
            </Row> */}
                    <Row>
                        <Col>
                            <Form.Group className="mb-3 d-flex flex-column align-items-center">
                                <Form.Label className='addHashtagTxt'>Hashtags</Form.Label>
                                <Form.Control className='textInputs' type='text' placeholder='#Example, #Example' onChange={handleTags} value={memoryTags} />
                            </Form.Group>
                        </Col>
                    </Row>
                </Col>
                <Col className='secondInfoCol'>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3 d-flex flex-column align-items-center">
                                <Form.Label className='addFolderInputTxt'>Folder</Form.Label>
                                <Form.Select className='textInputs' onChange={handleFolder} value={folderId}>
                                    <option hidden>Folder</option>
                                    {folders.map((option: any, idx: number) => {
                                        return (
                                            <option key={idx} value={option.id} >{option.name}</option>
                                        );
                                    })}
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Group className="mb-3 d-flex flex-column align-items-center">
                                <Form.Label className='addMemoryTxt'>Memory Title</Form.Label>
                                <Form.Control className='textInputs' type='text' placeholder='Memory Title' onChange={handleTitle} value={memoryTitle} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3 d-flex flex-column align-items-center">
                                <Form.Label className='addDateTxt'>Date</Form.Label>
                                <Form.Control className='textInputs' type='text' placeholder='MM/DD/YYYY or DD/MM/YYYY' onChange={handleDate} value={memoryDate} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3 d-flex flex-column align-items-center">
                                <Form.Label className='addDescriptionTxt'>Description</Form.Label>
                                <textarea className='textInputs' placeholder='Description' onChange={handleDescription} value={memoryDescription} />
                            </Form.Group>
                        </Col>
                    </Row>
                </Col>
                <Row className='desktopAddRow'>
                    <Col className='d-flex justify-content-center'>
                        <Button onClick={() => { setShow(true); handleSave(); navigate('/dashboard') }} className='addBtn' variant=''>Add</Button>
                    </Col>
                    <Col className='d-flex justify-content-center'>
                        <Button onClick={() => navigate(-1)} className='addCancelBtn' variant=''>Cancel</Button>
                    </Col>
                </Row>
            </Row>
        </Container>
    );
}
