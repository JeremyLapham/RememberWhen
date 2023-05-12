import React, { useContext, useEffect, useState } from 'react';
import logo from '../../assets/elephantLogo.svg';
import './SignIn.css';
import { Button, Col, Container, Row, Toast } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { GetLoggedInUserData, login } from '../Services/DataService';
import { MyContext } from '../context';

export default function SignInInfo() {
    const { setUser } = useContext(MyContext);

    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [clickedSignIn, setClickedSignIn] = useState(false);
    const [dots, setDots] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            setDots((prevDots) => prevDots.length >= 3 ? '' : prevDots + '.');
        }, 500);

        return () => clearInterval(interval);
    }, []);

    const navigate = useNavigate();

    const handleSignInClick = () => {
        navigate('/SignUp');
    };

    const handleLogin = async (name: any) => {
        setClickedSignIn(true)
        let userData = {
            Username,
            Password
        }
        setUser(Username);
        try {
            let token = await login(userData);
            if (token.token != null) {
                localStorage.setItem("Token", token.token);
                await GetLoggedInUserData(Username);
                navigate('/DashBoard', { state: { user: name } });
            }
        } catch (error) {
            setClickedSignIn(false)
            toggleShowA()
        }
    }

    const [showA, setShowA] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const handleShowPassword = (e: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
        setIsChecked(e.target.checked);
    }

    const toggleShowA = () => setShowA(!showA);

    return (
        <Container fluid>
            <Row>
                <Col md={6} className="mb-2">
                    <Toast className='toast' show={showA} onClose={toggleShowA} delay={4000} autohide>
                        <Toast.Body>Invalid Username or Password</Toast.Body>
                    </Toast>
                </Col>
            </Row>
            <div>
                {clickedSignIn ? 
                <h1 className='loading'>{`Loading${dots}`}</h1> : ''}
                </div>
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
                                        <input onChange={({ target: { value } }) => setUsername(value)} type='text' value={Username} className='inputField' placeholder='Enter your username' />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <h4 className='passwordInput'>Password</h4>
                                        <input onChange={({ target: { value } }) => setPassword(value)} className='inputField' type={isChecked ? 'text' : 'password'} placeholder='Enter your password' />
                                    </Col>
                                </Row>
                                <Row className='d-flex align-items-center'>
                                    <Col className='d-flex justify-content-start'>
                                        <label>
                                            <input className='showPassword' type="checkbox" checked={isChecked} onChange={handleShowPassword} />
                                            Show password
                                        </label>
                                    </Col>
                                    <Col className='d-flex justify-content-end'>
                                        <h6 className='forgotPass'>Forgot Password?</h6>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='d-flex justify-content-center'>
                                        <Button onClick={() => handleLogin(Username)} className='signInBtnTwo' variant=''>Sign In</Button>
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
