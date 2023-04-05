import React, { useEffect } from 'react';
import CustomNavbar from '../navComponent/NavbarComponent';
import { Col, Container, Row, Button } from 'react-bootstrap';
import heart from '../../assets/folderpic.png';
import addBtn from '../../assets/PlusCircle.png';
import { useNavigate, useLocation } from 'react-router-dom';
import './ClickedFolder.css';
import AddIcon from '@mui/icons-material/Add';

export default function ClickedFolder() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddMemoryClick = () => {
        navigate('/AddMemory');
    };

    return (
        <Container fluid>
            <CustomNavbar />
            <Row>
                <Col>
                    <h1 className='nameFolder text-center'>{location.state.name}...</h1>
                </Col>
            </Row>
            <Row className='d-flex align-items-center'>
                <Col>
                    <img className='heart' src={heart} alt='remember heart in clicked folder ' />
                </Col>
                <Col className='d-flex flex-column justify-content-end'>
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
                </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-center'>
                    <div className='displayMemory'>

                    </div>
                </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-center'>
                    <Button onClick={() => navigate('/DashBoard')} className='moreMemories' variant=''>Go Back</Button>
                </Col>
            </Row>
        </Container>
    )
}
