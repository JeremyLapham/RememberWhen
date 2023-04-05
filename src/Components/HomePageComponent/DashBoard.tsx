import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Navbar, Offcanvas, Button, Nav } from 'react-bootstrap';
import logo from '../../assets/elephantLogo.svg';
import addBtn from '../../assets/PlusCircle.png';
import placer from '../../assets/placer.png';
import placerTwo from '../../assets/placerTwo.png';
import folderPic from '../../assets/folderpic.png';
import './DashBoard.css';
import { useNavigate } from 'react-router-dom';
import CustomNavbar from '../../Components/navComponent/NavbarComponent';
import AddIcon from '@mui/icons-material/Add';

export default function DashBoard() {
    const [hello, setHello] = useState('Jeremy');
    const [moreMemoryClicked, setMoreMemoryClicked] = useState(false);
    const [clickedName, setClickedName] = useState('');
    const navigate = useNavigate();

    const handleClick = () => {
        setMoreMemoryClicked(!moreMemoryClicked);
    }

    const handleAddMemoryClick = () => {
        navigate('/AddMemory');
    };
    const handleAddFolderClick = () => {
        navigate('/AddFolder');
    };

    const [placerCard, setPlacerCard] = useState([
        {
            overImgTxt: 'Our first date',
            dateTxt: '2/14/23',
            img: placer
        },
        {
            overImgTxt: 'Bowling trip',
            dateTxt: '5/26/23',
            img: placerTwo
        }
    ]);
    interface Folder {
        folderName: string;
    }

    const [placerFolder, setPlacerFolder] = useState<Folder[]>([
        {
            folderName: 'Dates'
        },
        {
            folderName: 'Trips'
        },
        {
            folderName: 'Camping'
        }
    ]);

    const handleFolderClick = (folderName: string) => {
        setClickedName(folderName);
        navigate('/ClickedMemory', { state: { name: folderName } })
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
                            <Button onClick={()=>navigate('/AddMemory')} className='addNew' variant='' style={{ display: 'flex', alignItems: 'center' }}>
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
                            <Button onClick={()=>navigate('/AddFolder')} className='addNewFolder' variant='' style={{ display: 'flex', alignItems: 'center' }}>
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
                        <h1 className='helloTxt'>Hello, <p style={{ color: 'black' }} className='d-inline'>{hello}</p></h1>
                        <p className='welcomeTxt'>Welcome to your memories, remember when...</p>
                    </Col>
                </Row>
            }

            {moreMemoryClicked ?
                <Container>
                    <Row>
                        <Col className='d-flex justify-content-center folderDisplay'>
                            <Row>
                                {placerFolder.map((folder, idx) => {
                                    return (
                                        <Col key={idx} xs={4}>
                                            <Button onClick={() => { handleFolderClick(folder.folderName); }} variant=''>
                                                <img src={folderPic} />
                                                <p className='folderFont'>{folder.folderName}</p>
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
                        {placerCard.map((cardInfo, idx) => {
                            return (
                                <Button key={idx} style={{ position: 'relative', pointerEvents: 'none' }} variant=''>
                                    <img className='memoryCards' src={cardInfo.img} />
                                    <div className='txtOnImg'>{cardInfo.overImgTxt}</div>
                                    <div className='dateOnImg'>{cardInfo.dateTxt}</div>
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