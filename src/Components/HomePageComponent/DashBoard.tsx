import React, { useState } from 'react';
import { Col, Container, Row, Navbar, Offcanvas, Button, Nav } from 'react-bootstrap';
import logo from '../../assets/elephantLogo.svg';
import home from '../../assets/home.svg';
import setting from '../../assets/setting.svg';
import addnew from '../../assets/addnew.svg';
import memories from '../../assets/memories.svg';
import addBtn from '../../assets/PlusCircle.png';
import placer from '../../assets/placer.png';
import placerTwo from '../../assets/placerTwo.png';
import folderPic from '../../assets/folderpic.png';
import './DashBoard.css';
import { useNavigate, Link } from 'react-router-dom';

export default function DashBoard() {
    const [hello, setHello] = useState('First');
    const [moreMemoryClicked, setMoreMemoryClicked] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        setMoreMemoryClicked(!moreMemoryClicked);
    }

    const handleSignInClick = () => {
        navigate('/AddMemory');
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

    return (
        <Container fluid>
            {[false].map((expand, idx) => (
                <Navbar key={idx} expand={expand} className="mb-3">
                    <Container fluid>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="start" className='offCanvas w-50'>
                            <Offcanvas.Body className='offCanvasBody'>
                                <div style={{ marginLeft: '1rem' }}>
                                <Nav.Link as={Link} to='/DashBoard'><img src={home} alt='home picture' />
                                    <h1 className='navWords d-inline'>Home</h1></Nav.Link>
                                </div>
                                <div style={{ marginLeft: '1rem' }}>
                                    <img src={setting} alt='setting picture' />
                                    <h1 className='navWords d-inline'>Setting</h1>
                                </div>
                                <div style={{ marginLeft: '1rem' }}>
                                    <Nav.Link as={Link} to='/AddMemory'><img src={addnew} alt='addnew picture' />
                                    <h1 className='navWords d-inline'>Add new</h1></Nav.Link>
                                </div>
                                <div style={{ marginLeft: '1rem' }}>
                                    <img src={memories} alt='memories picture' />
                                    <h1 className='navWords d-inline'>Memories</h1>
                                </div>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
            <Row className='d-flex align-items-center'>
                <Col>
                    <img className='logoEle' src={logo} alt='remember when logo, elephant holding balloon' />
                </Col>
                <Col className='d-flex flex-column justify-content-end'>
                    <p className='addNewTxt'>Add Memory</p>
                    <div className='d-flex justify-content-end'>
                        <p className='addNew'>
                            <Button onClick={handleSignInClick} className='addNewBtn' variant=''>
                                <img src={addBtn} alt='add new memories' />
                            </Button>
                        </p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className='helloTopTxt'>
                    <h1 className='helloTxt'>Hello, <p style={{ color: 'black' }} className='d-inline'>{hello}</p></h1>
                    <p className='welcomeTxt'>Welcome to your memories, remember when...</p>
                </Col>
            </Row>
            {moreMemoryClicked ?
                <Container>
                    <Row>
                        <Col className='d-flex justify-content-center folderDisplay'>
                            <Row>
                                <Col xs={4}>
                                    <Button variant=''>
                                        <img src={folderPic} />
                                        <p className='folderFont'>Dates</p>
                                    </Button>
                                </Col>
                                <Col xs={4}>
                                    <Button variant=''>
                                        <img src={folderPic} />
                                        <p className='folderFont'>Trips</p>
                                    </Button>
                                </Col>
                                <Col xs={4}>
                                    <Button variant=''>
                                        <img src={folderPic} />
                                        <p className='folderFont'>Camping</p>
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                :
                <Row>
                    <Col className='memoryBox'>
                        {placerCard.map((cardInfo, idx) => {
                            return (
                                <Button key={idx} style={{ position: 'relative' }} variant=''>
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