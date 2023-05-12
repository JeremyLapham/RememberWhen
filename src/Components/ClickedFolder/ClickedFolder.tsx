import React, { useContext, useEffect, useState } from 'react';
import CustomNavbar from '../navComponent/NavbarComponent';
import { Col, Container, Row, Button, Modal } from 'react-bootstrap';
import heart from '../../assets/folderpic.png';
import { useNavigate } from 'react-router-dom';
import './ClickedFolder.css';
import AddIcon from '@mui/icons-material/Add';
import { MyContext } from '../context';
import { DeleteFolder, getMemoryByFolderId } from '../Services/DataService';
<<<<<<< HEAD
import DesktopNav from '../../Components/DesktopNavComponent/DesktopNav';
=======
import DesktopNav from '../DesktopNavComponent/DesktopNav';
>>>>>>> 5251a62403ffa9fa8ee1529971a4a0345ec7defd

export default function ClickedFolder() {
    const { folderName } = useContext(MyContext);
    const { selectedFolder } = useContext(MyContext);
    const { setSelectedMemory } = useContext(MyContext);
    const { setFolderEdit } = useContext(MyContext);
    const { setIsEditFolder } = useContext(MyContext);
    const { setIsMemoryEdit } = useContext(MyContext);
    const { setFromAddFolder } = useContext(MyContext);
    const { fromAddFolder } = useContext(MyContext);

    const [memoryItem, setMemoryItem] = useState([]);

    useEffect(() => {
        const GetMemories = async () => {
            let memory = await getMemoryByFolderId(selectedFolder.id);
            setMemoryItem(memory);
        }
        GetMemories()
    }, []);

    const navigate = useNavigate();

    const handleClickedMemory = (memory: any) => {
        setSelectedMemory(memory);
        navigate('/memory');
    }

    const handleEditFolder = () => {
        setFolderEdit({
            name: folderName,
            id: selectedFolder.id
        });
        setIsEditFolder(true);
        setTimeout(() => {
            navigate('/addfolder');
        }, 500);
    }
    const handleDeleteFolder = async () => {
        await DeleteFolder(selectedFolder);
        navigate('/dashboard');
    }
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    return (
        <Container fluid>
            <DesktopNav/>
            <Row>
                <Modal className='modalBG' show={show} onHide={handleClose}>
                    <Modal.Body className='modalBody'>
                        <Row>
                            <Col className='d-flex justify-content-center'>
                                <p className='modalTxt'>Are you sure you want to delete this folder?</p>
                            </Col>
                        </Row>
                        <Row>

                            <Col className='d-flex justify-content-center'>
                                <Button className='confirmDeleteBtnFold' variant="" onClick={handleDeleteFolder}>
                                    Delete
                                </Button>
                            </Col>
                            <Col className='d-flex justify-content-center'>
                                <Button className='cancelDeleteFold' variant="" onClick={handleClose}>
                                    Cancel
                                </Button>
                            </Col>
                        </Row>
                    </Modal.Body>
                </Modal>
            </Row>
            <CustomNavbar />
            <DesktopNav />
            <Row>
                <Col>
                    <h1 className='nameFolder text-center'>{fromAddFolder ? selectedFolder.name : folderName}...</h1>
                </Col>
            </Row>
            <Row className='d-flex align-items-center'>
                <Col>
                    <img className='heart' src={heart} alt='remember heart in clicked folder ' />
                </Col>
                <Col className='d-flex flex-column justify-content-end'>
                    <Row>
                        <div className='d-flex justify-content-end'>
                            <Button onClick={() => { navigate('/AddMemory'); setIsMemoryEdit(false) }} className='addNew' variant='' style={{ display: 'flex', alignItems: 'center' }}>
                                <Col xs={9}>
                                    <p className='addNewTxt'>Add Memory</p>
                                </Col>
                                <Col xs={3} className='d-flex justify-content-center'>
                                    <AddIcon style={{ fontSize: '28px' }} />
                                </Col>
                            </Button>
                        </div>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-center'>
                    <div className='displayMemory'>
                        <Row className='d-flex justify-content-center'>
                            {memoryItem.length === 0 ? <h2>No current memories</h2> :
                                memoryItem.filter((item: { isDeleted: any; }) => !item.isDeleted).map((memory: any, idx: any) => {
                                    return (
                                        <Col key={idx} xs={4} md={3} lg={3} className='cardNoPad'>
                                            <Button onClick={() => handleClickedMemory(memory)} variant='' className='allFolderBtn'>
                                                <img className='folderImg' src={memory.image} alt='clickable image' />
                                            </Button>
                                            <p className='text-center memoryTitle'>{memory.title}</p>
                                            <p className='text-center memoryDate'>{memory.date}</p>
                                        </Col>
                                    );
                                })
                            }
                        </Row>
                    </div>
                </Col>
            </Row>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button onClick={handleEditFolder} className='editBtnFold' variant='' >Edit</Button>
                <Button onClick={() => { setShow(true); }} className='deleteBtnFold' variant='' >Delete</Button>
                <Button className='shareBtnFold' variant=''>Share</Button>
            </div>
            <Row className="desktopBtnRow">
                <Col className="desktopAddCol">
                    <Button variant='' onClick={() => { navigate("/AddMemory"); setIsMemoryEdit(false); }} className="desktopAddBtn">Add Memory +</Button>
                </Col>
                <Col className="d-flex justify-content-center">
                    <Button onClick={() => navigate('/dashboard')} className="moreMemories" variant="">
                        Back
                    </Button>
                </Col>
                <Col className="desktopAddCol">
                    <Button variant='' onClick={() => { navigate("/AddFolder"); setIsEditFolder(false); }} className="desktopAddBtn2">Add Folder +</Button>
                </Col>
            </Row>
        </Container>
    )
}
