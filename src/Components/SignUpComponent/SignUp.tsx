import React, { useState } from 'react';
import logo from '../../assets/elephantLogo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignUp.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { createAccount } from '../Services/DataService';

export default function SignUpInfo() {
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');

    const handelSubmit = () => {
        let userData = {
            Id: 0,
            Username,
            Password
        }
        createAccount(userData)
        navigate('/SignInInfo');
    }

    const navigate = useNavigate();

    const handleSignInClick = () => {
        navigate('/SignInInfo');
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
                                        <h4 className='signUpInput'>Username</h4>
                                        <input onChange={({ target: { value } }) => setUsername(value)} type='text' className='inputField' placeholder='Enter your username' />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <h4 className='signUpInput'>Email</h4>
                                        <input className='inputField' type='email' placeholder='Enter your email' />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <h4 className='signUpInput'>Password</h4>
                                        <input onChange={({ target: { value } }) => setPassword(value)} className='inputField' type='password' placeholder='Enter your password' />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='d-flex justify-content-center'>
                                        <Button onClick={handelSubmit} className='signUpBtn' variant=''>Sign Up</Button>
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
