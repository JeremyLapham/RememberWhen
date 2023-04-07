import React, { useState } from 'react';
import { Col, Container, Row, Button, Form, Toast } from 'react-bootstrap';
import sound from '../../assets/sound.png';
import './AddMemory.css';
import { useNavigate } from 'react-router-dom';
import CustomNavbar from '../../Components/navComponent/NavbarComponent';
import { addMemoryItem, getMemoryItemsByUserId, updateMemoryItem } from '../Services/DataService';

export default function AddMemory() {
    const navigate = useNavigate()
    const [show, setShow] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    // const [selectedAudio, setSelectedAudio] = useState('');

    const [memoryImage, setMemoryImage] = useState('');
    const [memoryTitle, setMemoryTitle] = useState('');
    const [memoryDescription, setMemoryDescription] = useState('');
    const [memoryFolder, setMemoryFoler] = useState('');
    const [memoryTags, setMemoryTags] = useState('');
    const [memoryDate, setMemoryDate] = useState('');
    const [memoryItems, setMemoryItems] = useState([]);
    const [memoryId, setMemoryId] = useState(0);
    const [memoryUserId, setMemoryUserId] = useState(0);
    const [memoryPublisherName, setPublisherName] = useState('');

    const [editBool, setEdit] = useState(false);


    const handleTitle = ({ target }) => setMemoryTitle(target.value);
    const handleDescription = ({ target }) => setMemoryDescription(target.value);
    const handleFolder = ({ target: { value } }) => setMemoryFoler(value);
    const handleTags = ({ target }) => setMemoryTags(target.value);
    const handleDate = ({target}) => setMemoryDate(target.value);



    const handleFileSelect = (e: any) => {
        setSelectedImage(e.target.files[0]);
    };

    // const handleAudio = () => {
    //     setSelectedAudio(sound)
    // };

    const handleSave = async () => {
        const item = {
            Id: memoryId,
            Userid: memoryUserId,
            PublishedName: memoryPublisherName,
            Title: memoryTitle,
            Image: memoryImage,
            Description: memoryDescription,
            Date: memoryDate,
            Tags: memoryTags,
            Category: memoryFolder,
            isPublished: true,
            isDeleted: false
        }

        console.log(item);
        let result = false;
        if(editBool) {
            result = await updateMemoryItem(item);
        } else {
            result = await addMemoryItem(item);
        }

        if(result) {
            let userMemoryItems = await getMemoryItemsByUserId(memoryUserId);
            console.log(userMemoryItems);
            setMemoryItems(userMemoryItems);
        } else {
            alert(`Blog Item was not ${editBool ? 'Updated' : 'Added'}`)
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
                        <Toast.Body>Memory has been added</Toast.Body>
                    </Toast>
                </Col>
            </Row>
            <CustomNavbar />
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
                        <Form.Label>Hashtags</Form.Label>
                        <Form.Control className='textInputs' type='text' placeholder='Hashtags' onChange={handleTags} value={memoryTags}/>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3 d-flex flex-column align-items-center">
                        <Form.Label>Folder</Form.Label>
                        <Form.Select className='textInputs' onChange={handleFolder} value={memoryFolder}>
                            <option hidden>Folder</option>
                            <option value='Dates' >Dates</option>
                            <option value='Trips' >Trips</option>
                            <option value='Camping' >Camping</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3 d-flex flex-column align-items-center">
                        <Form.Label>Memory Title</Form.Label>
                        <Form.Control className='textInputs' type='text' placeholder='Memory Title' onChange={handleTitle} value={memoryTitle}/>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3 d-flex flex-column align-items-center">
                        <Form.Label>Date</Form.Label>
                        <Form.Control className='textInputs' type='text' placeholder='Date' onChange={handleDate} value={memoryDate}/>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3 d-flex flex-column align-items-center">
                        <Form.Label>Description</Form.Label>
                        <Form.Control className='textInputs' placeholder='Description' onChange={handleDescription} value={memoryDescription}/>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-center'>
                    <Button onClick={() => {setShow(true); handleSave()}} className='addBtn' variant=''>Add</Button>
                </Col>
                <Col className='d-flex justify-content-center'>
                    <Button onClick={()=> navigate(-1)} className='addCancelBtn' variant=''>Cancel</Button>
                </Col>
            </Row>
        </Container>
    );
}
