import React from 'react';
import logo from '../../assets/elephantLogo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignIn.css';
import { Button, Col, Container, Row } from 'react-bootstrap';

export default function SignIn() {
    return (
        <Container className='signInPlacing'>
            <Row>
                <Col className='d-flex justify-content-center'>
                    <img className='logo' src={logo} alt='remember when logo, elephant holding balloon' />
                </Col>
            </Row>
            <Row className='text-center'>
                <Col>
                    <h1 className='rememberTxt'>Remember When</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant='' className='signInBtn'>Sign In</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className='noAccount'>Dont have an account? <strong>Sign Up</strong></p>
                </Col>
            </Row>
        </Container>
    )
}
