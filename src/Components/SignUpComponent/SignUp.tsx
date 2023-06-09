import React, { useState } from 'react';
import logo from '../../assets/elephantLogo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignUp.css';
import { Button, Col, Container, Row, Toast } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { createAccount } from '../Services/DataService';

export default function SignUpInfo() {
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [Email, setEmail] = useState('');
    const [clickSignUp, setClickSignUp] = useState(false);
    const navigate = useNavigate();

    const handelSubmit = () => {
        setClickSignUp(true);
        let userData = {
            Id: 0,
            Username,
            Email,
            Password
        }
        const GetLoggedInData = async () => {
            let result = await createAccount(userData)

            if (result) {
                setTimeout(() => {
                    navigate('/SignInInfo');
                }, 2000);
            } else {
                setClickSignUp(false);
                toggleShowA();
            }
        }
        GetLoggedInData()
    }


    const handleSignInClick = () => {
        navigate('/SignInInfo');
    };


    const [showA, setShowA] = useState(false);

    const toggleShowA = () => setShowA(!showA);

    return (
        <Container fluid>
            <Row>
                <Col className="mb-2">
                    <Toast className='toast' show={showA} onClose={toggleShowA} delay={4000} autohide>
                        <Toast.Body>The Username you entered is already taken.</Toast.Body>
                    </Toast>
                </Col>
            </Row>
            <Row>
                <Col className="mb-2">
                    <Toast className='toast' show={clickSignUp} onClose={() => setClickSignUp(false)} delay={4000} autohide>
                        <Toast.Body>Account has been made</Toast.Body>
                    </Toast>
                </Col>
            </Row>
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
                                        <input onChange={({ target: { value } }) => setEmail(value)} className='inputField' type='email' placeholder='Enter your email' />
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
                                        <Button onClick={handelSubmit} className='signUpBtn' variant='' disabled={clickSignUp}>Sign Up</Button>
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
