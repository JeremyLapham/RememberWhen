import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Navbar, Offcanvas, Button, Nav } from 'react-bootstrap';
import logo from '../../assets/elephantLogo.svg';
import folderPic from '../../assets/folderpic.png';
import './DashBoard.css';
import { useNavigate, useLocation } from 'react-router-dom';
import CustomNavbar from '../../Components/navComponent/NavbarComponent';
import AddIcon from '@mui/icons-material/Add';
import { GetPublishedMemoryItem, checkToken, getMemoryItemsByUserId, loggedInData } from '../Services/DataService';

export default function DashBoard() {
    const [moreMemoryClicked, setMoreMemoryClicked] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const [memoryId, setMemoryId] = useState(0);
    const [memoryUserId, setMemoryUserId] = useState(0);
    const [memoryPublisherName, setPublisherName] = useState('');

    const handleClick = () => {
        setMoreMemoryClicked(!moreMemoryClicked);
    }

    const [memoryItems, setMemoryItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let res = await GetPublishedMemoryItem();
            setMemoryItems(res);
            console.log(res);
        }
        fetchData();
    }, []);

    // useEffect(() => {
    //     const GetLoggedInData = async () => {
    //         const loggedIn = loggedInData();
    //         setMemoryUserId(loggedIn.userId);
    //         setPublisherName(loggedIn.publisherName);
    //         console.log(loggedIn);
    //         let userMemoryItems = await getMemoryItemsByUserId(loggedIn.userId);
    //         setMemoryItems(userMemoryItems);
    //         console.log(userMemoryItems);
    //     }
    //     if (!checkToken()) {
    //         navigate('/SignInInfo');
    //     } else {
    //         GetLoggedInData();
    //     }
    // }, []);

    const handleFolderClick = (clickedFolderName: string, info: any) => {
        navigate('/ClickedMemory', { state: { Folder: clickedFolderName, Data: info } })
    }
    return (
        <Container fluid>
            <CustomNavbar />
            <Row className='d-flex align-items-center'>
                <Col xs={6}>
                    <img className='logoEle' src={logo} alt='remember when logo, elephant holding balloon' />
                </Col>
                <Col xs={6} className='d-flex flex-column justify-content-end'>
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
                    <Row>
                        <div className='d-flex justify-content-end'>
                            <Button onClick={() => navigate('/AddFolder')} className='addNewFolder' variant='' style={{ display: 'flex', alignItems: 'center' }}>
                                <Col xs={9}>
                                    <p className='addNewTxt'>Add Folder</p>
                                </Col>
                                <Col xs={3} className='d-flex justify-content-center'>
                                    <AddIcon style={{ fontSize: '28px' }} />
                                </Col>
                            </Button>
                        </div>
                    </Row>
                </Col>
            </Row>
            {moreMemoryClicked ?
                <Row>
                    <Col className='rememberWhenTop'>
                        <h1 className='remmeberWhen'>Remember When...</h1>
                    </Col>
                </Row>
                :
                <Row>
                    <Col className='helloTopTxt'>
                        <h1 className='helloTxt'>Hello, <p style={{ color: 'black' }} className='d-inline'>{location.state.user}</p></h1>
                        <p className='welcomeTxt'>Welcome to your memories, remember when...</p>
                    </Col>
                </Row>
            }

            {moreMemoryClicked ?
                <Container>
                    <Row>
                        <Col className='d-flex justify-content-center folderDisplay'>
                            <Row>
                                {memoryItems.map((folder: any, idx: number) => {
                                    return (
                                        <Col key={idx} xs={4}>
                                            <Button onClick={() => { handleFolderClick(folder.category, folder) }} variant=''>
                                                <img src={folderPic} />
                                                <p className='folderFont'>{folder.category}</p>
                                            </Button>
                                        </Col>
                                    )
                                })}
                            </Row>
                        </Col>
                    </Row>
                </Container>
                :
                <Row>
                    <Col className='memoryBox'>
                        {memoryItems.map((cardInfo: any, idx: number) => {
                            return (
                                <Button key={idx} style={{ position: 'relative', pointerEvents: 'none' }} variant=''>
                                    <img className='memoryCards' src={cardInfo.image} />
                                    <div className='txtOnImg'>{cardInfo.title}</div>
                                    <div className='dateOnImg'>{cardInfo.date}</div>
                                </Button>
                            );
                        })}
                    </Col>
                </Row>
            }

            <Row>
                <Col className='d-flex justify-content-center'>
                    <Button onClick={handleClick} className='moreMemories' variant=''>{moreMemoryClicked ? 'Go Back' : 'Click for all memories'}</Button>
                </Col>
            </Row>
        </Container>
    )
}