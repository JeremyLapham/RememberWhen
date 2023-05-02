import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row, Button, Form, Toast, Modal } from 'react-bootstrap';
import './AddMemory.css';
import { useNavigate } from 'react-router-dom';
import CustomNavbar from '../../Components/navComponent/NavbarComponent';
import { addMemoryItem, getMemoryItemsByUserId, updateMemoryItem, getFolderByUserId } from '../Services/DataService';
import { MyContext } from '../context';
//import swal from 'sweetalert';

export default function AddMemory() {
    const { usersId } = useContext(MyContext);
    const { folderId } = useContext(MyContext);
    const { setMemoryItems } = useContext(MyContext);
    const { setFolderId } = useContext(MyContext);
    const { memoryEdit } = useContext(MyContext);
    const { isEditMemory } = useContext(MyContext);
    const { setSelectedMemory } = useContext(MyContext);
    const audioContext = new AudioContext();

    const oscillator = audioContext.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(440, audioContext.currentTime);


    const navigate = useNavigate()
    const [show, setShow] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    // const [selectedAudio, setSelectedAudio] = useState('');

    const [memoryImage, setMemoryImage] = useState(isEditMemory ? memoryEdit.image : '');
    const [memoryTitle, setMemoryTitle] = useState(isEditMemory ? memoryEdit.title : '');
    const [memoryDescription, setMemoryDescription] = useState(isEditMemory ? memoryEdit.description : '');
    const [memoryTags, setMemoryTags] = useState(isEditMemory ? memoryEdit.tags : '');
    const [memoryDate, setMemoryDate] = useState(isEditMemory ? memoryEdit.date : '');
    const [memoryId, setMemoryId] = useState(isEditMemory ? memoryEdit.id : 0);
    const [memoryPublisherName, setPublisherName] = useState('');
    const [folders, setFolders] = useState([]);

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
        if (memoryImage === '' || memoryDate === '' || memoryTitle === '' || memoryDescription === '' || memoryTags === '' || folderId === null) {
            //swal("Please make sure you enter in every field");
        } else {
            let item = {
                Id: memoryId,
                Userid: usersId,
                FolderId: folderId,
                PublishedName: memoryPublisherName,
                title: memoryTitle,
                image: memoryImage,
                description: memoryDescription,
                date: memoryDate,
                tags: memoryTags,
                Category: '',
                isPublished: true,
                isDeleted: false
            }
            setSelectedMemory(item);
            let result = false;
            if (isEditMemory) {
                result = await updateMemoryItem(item);
            } else {
                result = await addMemoryItem(item);
            }
            setShow(true);

            if (result) {
                let userMemoryItems = await getMemoryItemsByUserId(usersId);
                setMemoryItems(userMemoryItems);
            } else {
                alert(`Blog Item was not ${isEditMemory ? 'Updated' : 'Added'}`)
            }
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

    const handleClose = () => setShow(false);

    const handleViewMemory = async () => {
        navigate('/memory');
    }
    return (
        <Container fluid>
            <Row>
                <Modal className='modalBG' show={show} onHide={handleClose}>
                    <Modal.Body className='modalBody'>
                        <Row>
                            <Col className='d-flex justify-content-center'>
                                <p className='modalTxt'>Your memory was added!</p>
                            </Col>
                        </Row>
                        <Row>

                            <Col className='d-flex justify-content-center'>
                                <Button className='confirmDeleteBtn' variant="" onClick={handleViewMemory}>
                                    View
                                </Button>
                            </Col>
                        </Row>
                    </Modal.Body>
                </Modal>
            </Row>
            <CustomNavbar />
            <Row className='desktopInfoRow'>
                <Col md={4} className='firstInfoCol'>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3 d-flex flex-column align-items-center" controlId="Image">
                                <Form.Label className='addImgTxt'>Add image</Form.Label>
                                <Button style={{ position: 'relative' }} id='custom-input' className='selectedImgBtn'>
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
                <Col md={4} className='secondInfoCol'>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3 d-flex flex-column align-items-center">
                                <Form.Label className='addFolderInputTxt'>Folder</Form.Label>
                                <Form.Select className='textInputs' onChange={handleFolder} value={folderId}>
                                    <option hidden>Folder</option>
                                    {folders.filter((item: { isDeleted: any; }) => !item.isDeleted).map((option: any, idx: number) => {
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
                        <Button onClick={() => { handleSave(); }} className='addBtn' variant=''>{isEditMemory ? 'update' : 'add'}</Button>
                    </Col>
                    <Col className='d-flex justify-content-center'>
                        <Button onClick={() => navigate(-1)} className='addCancelBtn' variant=''>Cancel</Button>
                    </Col>
                </Row>
            </Row>
        </Container>
    );
}
