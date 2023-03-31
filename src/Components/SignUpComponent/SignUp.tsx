import React from 'react';
import logo from '../../assets/elephantLogo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignUp.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function SignUpInfo() {

    const navigate = useNavigate();
    const navigateToHome = useNavigate();

    const handleSignInClick = () => {
        navigate('/SignInInfo');
    };

    const handleHomeClick = () => {
        navigateToHome('/DashBoard');
    };

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
                                    <Button onClick={handleSignInClick} variant=''><h1>Sign In</h1></Button>
                                </Col>
                                <Col className='d-flex justify-content-center'>
                                    <h1 style={{ textDecoration: 'underline' }}>Sign Up</h1>
                                </Col>
                                <Row>
                                    <Col>
                                        <h4 className='signUpInput'>First Name</h4>
                                        <input type='text' className='inputField' placeholder='Enter your first name' />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <h4 className='signUpInput'>Last Name</h4>
                                        <input className='inputField' type='text' placeholder='Enter your last name' />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <h4 className='signUpInput'>Password</h4>
                                        <input className='inputField' type='password' placeholder='Enter your password' />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <h4 className='signUpInput'>Confirm Password</h4>
                                        <input className='inputField' type='password' placeholder='Confrim your password' />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='d-flex justify-content-center'>
                                        <Button onClick={handleHomeClick} className='signUpBtn' variant=''>Sign Up</Button>
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
