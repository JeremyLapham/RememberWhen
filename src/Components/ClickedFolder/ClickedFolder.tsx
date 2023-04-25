import React, { useContext, useEffect, useState } from 'react';
import CustomNavbar from '../navComponent/NavbarComponent';
import { Col, Container, Row, Button } from 'react-bootstrap';
import heart from '../../assets/folderpic.png';
import { useNavigate } from 'react-router-dom';
import './ClickedFolder.css';
import AddIcon from '@mui/icons-material/Add';
import { MyContext } from '../context';
import { getMemoryByFolderId } from '../Services/DataService';

export default function ClickedFolder() {
    const { folderName } = useContext(MyContext);
    const { selectedFolder } = useContext(MyContext);
    const { setSelectedMemory } = useContext(MyContext);
    const { setFolderEdit } = useContext(MyContext);
    const { setIsEditFolder } = useContext(MyContext);

    const [memoryItem, setMemoryItem] = useState([]);
    
    useEffect(() => {
        const GetMemories = async() => {
            // console.log(selectedFolder);
            let memory = await getMemoryByFolderId(selectedFolder);
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
            id: selectedFolder
        });
        setIsEditFolder(true);
        setTimeout(() => {
            navigate('/addfolder');
        }, 500);
    }

    return (
        <Container fluid>
            <CustomNavbar />
            <Row>
                <Col>
                    <h1 className='nameFolder text-center'>{folderName}...</h1>
                </Col>
            </Row>
            <Row className='d-flex align-items-center'>
                <Col>
                    <img className='heart' src={heart} alt='remember heart in clicked folder ' />
                </Col>
                <Col className='d-flex flex-column justify-content-end'>
                    <Row>
                        <div className='d-flex justify-content-end'>
                            <Button onClick={() => navigate('/AddMemory')} className='addNew' variant='' style={{ display: 'flex', alignItems: 'center' }}>
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
                        <Row>
                            {memoryItem.map((memory: any,idx: any) => {
                                return (
                                    <Col key={idx} xs={4} className='cardNoPad'>
                                        <Button onClick={() => handleClickedMemory(memory)} variant='' className='allFolderBtn'>
                                            <img className='folderImg' src={memory.image} alt='clickable image' />
                                        </Button>
                                        <p className='text-center memoryTitle'>{memory.title}</p>
                                        <p className='text-center memoryDate'>{memory.date}</p>
                                    </Col>
                                );
                            })}
                        </Row>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-center'>
                    <Button onClick={handleEditFolder} className='' variant='warning'>Edit</Button>
                </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-center'>
                    <Button onClick={() => navigate(-1)} className='moreMemories' variant=''>Go Back</Button>
                </Col>
            </Row>
        </Container>
    )
}
