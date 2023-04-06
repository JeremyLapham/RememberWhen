import React, { useState } from 'react';
import logo from '../../assets/elephantLogo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignIn.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { login } from '../Services/DataService';

export default function SignInInfo() {
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSignInClick = () => {
        navigate('/SignUp');
    };

    const handleLogin = async () => {
        let userData = {
            Username,
            Password
        }
        let token = await login(userData);
        if(token.token != null){
            localStorage.setItem("Token", token.token);
            login(userData);
            navigate('/DashBoard');
        }
    }

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
                                    <Button onClick={handleSignInClick} variant=''><h1>Sign Up</h1></Button>
                                </Col>
                                <Row>
                                    <Col>
                                        <h4 className='userNameInput'>Username</h4>
                                        <input onChange={({ target: { value } }) => setUsername(value)} type='text' className='inputField' placeholder='Enter your username' />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <h4 className='passwordInput'>Password</h4>
                                        <input  onChange={({ target: { value } }) => setPassword(value)} className='inputField' type='password' placeholder='Enter your password' />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='d-flex justify-content-end'>
                                        <h6 className='forgotPass'>Forgot Password?</h6>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='d-flex justify-content-center'>
                                        <Button onClick={handleLogin} className='signInBtnTwo' variant=''>Sign In</Button>
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
