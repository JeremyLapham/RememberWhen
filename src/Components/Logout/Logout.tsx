import React from 'react';
import CustomNavbar from '../navComponent/NavbarComponent';
import './Logout.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import elephant from '../../assets/elephantLogo.svg';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
    const navigate = useNavigate();
    return (
        <Container fluid>
            <CustomNavbar />
            <Row>
                <Col>
                    <img className='elephant' src={elephant} alt='Elephant logo in logout page' />
                </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-center'>
                    <h1 className='settingTxt'>Settings...</h1>
                </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-center align-items-center'>
                    <Button onClick={()=>navigate('/')} className='logoutBtn' variant=''>Logout</Button>
                </Col>
            </Row>

        </Container>
    )
}
