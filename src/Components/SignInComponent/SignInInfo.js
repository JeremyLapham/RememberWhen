import React from 'react';
import logo from '../../assets/elephantLogo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignIn.css';
import { Button, Col, Container, Row } from 'react-bootstrap';

export default function SignInInfo() {
    return (
        <Container fluid>
            <Row>
                <Col className='d-flex justify-content-center'>
                    <img className='logo mt-5' src={logo} alt='remember when logo, elephant holding balloon' />
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className='signInBg'>
                        <Container>
                            <Row className='pt-4'>
                                <Col className='d-flex justify-content-center'>
                                    <h1 style={{ textDecoration: 'underline' }}>Sign In</h1>
                                </Col>
                                <Col className='d-flex justify-content-center'>
                                    <h1>Sign Up</h1>
                                </Col>
                                <Row>
                                    <Col>
                                        <h4 className='userNameInput'>Username</h4>
                                        <input type='text' className='inputField' placeholder='Enter your username' />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <h4 className='passwordInput'>Password</h4>
                                        <input className='inputField' type='password' placeholder='Enter your password' />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='d-flex justify-content-end'>
                                        <h6 className='forgotPass'>Forgot Password?</h6>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='d-flex justify-content-center'>
                                        <Button className='signInBtnTwo' variant=''>Sign In</Button>
                                    </Col>
                                </Row>
                            </Row>
                        </Container>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
