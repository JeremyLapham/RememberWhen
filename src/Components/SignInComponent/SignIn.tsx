import React from 'react';
import logo  from '../../assets/elephantLogo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignIn.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {

    const navigate = useNavigate();

    const handleSignInClick = () => {
        navigate('/SignInInfo');
    };
    const handleSignUpClick = () => {
        navigate('/SignUp');
    };

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
                    <Button variant='' className='signInBtn' onClick={handleSignInClick}>Sign In</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className='noAccount'>Dont have an account? <Button onClick={handleSignUpClick} className='dontHaveAccount' variant=''><strong>Sign Up</strong></Button></p>
                </Col>
            </Row>
        </Container>
    )
}
