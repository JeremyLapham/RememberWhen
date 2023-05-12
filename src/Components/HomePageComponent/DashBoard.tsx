import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import logo from '../../assets/elephantLogo.svg';
import folderImg from '../../assets/folderpic.png'
import './DashBoard.css';
import { useNavigate } from 'react-router-dom';
import CustomNavbar from '../../Components/navComponent/NavbarComponent';
import DesktopNav from '../../Components/DesktopNavComponent/DesktopNav';
import AddIcon from '@mui/icons-material/Add';
import { checkToken, getFolderByUserId, getMemoryItemsByUserId, loggedInData } from '../Services/DataService';
import { MyContext } from '../context';
import DesktopNav from '../DesktopNavComponent/DesktopNav';

export default function DashBoard() {
    const { username } = useContext(MyContext);
    const { memoryItems } = useContext(MyContext);
    const { moreMemoryClicked } = useContext(MyContext);
    const { folders } = useContext(MyContext);
    const { setMemoryItems } = useContext(MyContext);
    const { setUsersId } = useContext(MyContext);
    const { setFolders } = useContext(MyContext);
    const { setMoreMemoryClicked } = useContext(MyContext);
    const { setSelectedFolder } = useContext(MyContext);
    const { setFolderName } = useContext(MyContext);
    const { setIsEditFolder } = useContext(MyContext);
    const { setIsMemoryEdit } = useContext(MyContext);
    const { setUser } = useContext(MyContext);
    const { setSelectedMemory } = useContext(MyContext);

    const navigate = useNavigate();

    const handleClick = () => {
        setMoreMemoryClicked(!moreMemoryClicked);
    }

    useEffect(() => {
        const GetLoggedInData = async () => {
            const userId = sessionStorage.getItem('UserId');
            const userName = sessionStorage.getItem('Username');
            if (userId && userName) {
                setUsersId(parseInt(userId));
                setUser(userName);
                const userMemoryItems = await getMemoryItemsByUserId(parseInt(userId));
                const displayFolder = await getFolderByUserId(parseInt(userId));
                setMemoryItems(userMemoryItems);
                setFolders(displayFolder);
            } else {
                const loggedIn = loggedInData();
                const LoggedIn = {
                    userId: loggedIn['userId'],
                    publisherName: loggedIn['publisherName']
                }
                sessionStorage.setItem('UserId', JSON.stringify(LoggedIn.userId));
                sessionStorage.setItem('Username', LoggedIn.publisherName);
                setUsersId(LoggedIn.userId);
                const userMemoryItems = await getMemoryItemsByUserId(LoggedIn.userId);
                const displayFolder = await getFolderByUserId(LoggedIn.userId);
                setMemoryItems(userMemoryItems);
                setFolders(displayFolder);
            }
        }

        if (!checkToken()) {
            navigate('/SignInInfo');
        } else {
            GetLoggedInData();
        }
    }, []);

    const handleFolderClick = (folder: any, name: string) => {
        setSelectedFolder(folder);
        setFolderName(name);
        navigate('/ClickedFolder');
    }

<<<<<<< HEAD
  const handleFolderClick = (folder: any, name: string) => {
    setSelectedFolder(folder);
    setFolderName(name);
    navigate('/ClickedFolder');
  }
  return (
    <Container fluid>
      <DesktopNav/>
      <CustomNavbar />
      <Row className='d-flex align-items-center'>
        <Col xs={6}>
          <img className='logoEle' src={logo} alt='remember when logo, elephant holding balloon' />
        </Col>
        <Col xs={6} className='d-flex flex-column justify-content-end'>
          <Row>
            <div className='d-flex justify-content-end'>
              <Button onClick={() => navigate('/AddMemory')} className='addNew' variant='' style={{ display: 'flex', alignItems: 'center' }}>
                <Col xs={9}>
                  <p className='addNewTxt'>Add Memory</p>
=======
    const handlememoryClickDash = (memory: any) => {
        setSelectedMemory(memory);
        navigate('/memory')
    }
    return (
        <Container fluid>
            <CustomNavbar />
            <DesktopNav />
            <Row className='d-flex align-items-center'>
                <Col xs={6}>
                    <img className='logoEle' src={logo} alt='remember when logo, elephant holding balloon' />
>>>>>>> 5251a62403ffa9fa8ee1529971a4a0345ec7defd
                </Col>
                <Col xs={6} className='d-flex flex-column justify-content-end'>
                    <Row>
                        <div className='d-flex justify-content-end'>
                            <Button onClick={() => { navigate('/AddMemory'); setIsMemoryEdit(false); }} className='addNew' variant='' style={{ display: 'flex', alignItems: 'center' }} disabled={folders.filter((item: { isDeleted: any; }) => !item.isDeleted).length === 0}>
                                <Col xs={9}>
                                    <p className='addNewTxt'>Add Memory</p>
                                </Col>
                                <Col xs={3} className='d-flex justify-content-center'>
                                    <AddIcon style={{ fontSize: '28px' }} />
                                </Col>
                            </Button>
                        </div>
                    </Row>
                    <Row>
                        <div className='d-flex justify-content-end'>
                            <Button onClick={() => { navigate('/AddFolder'); setIsEditFolder(false); }} className='addNewFolder' variant='' style={{ display: 'flex', alignItems: 'center' }}>
                                <Col xs={9}>
                                    <p className='addNewTxt'>Add Folder</p>
                                </Col>
                                <Col xs={3} className='d-flex justify-content-center'>
                                    <AddIcon style={{ fontSize: '28px' }} />
                                </Col>
                            </Button>
                        </div>
                    </Row>
                </Col>
            </Row>
            {moreMemoryClicked ?
                <Row>
                    <Col className='rememberWhenTop'>
                        <h1 className='remmeberWhen'>Remember When...</h1>
                    </Col>
                </Row>
                :
                <Row>
                    <Col className='helloTopTxt'>
                        <h1 className='helloTxt'>Hello, <p style={{ color: 'black' }} className='d-inline'>{username}</p></h1>
                        <p className='welcomeTxt'>Welcome to your memories, remember when...</p>
                    </Col>
                </Row>
            }

            {moreMemoryClicked ?
                <Container>
                    <Row>
                        <Col className='d-flex justify-content-center folderDisplay'>
                            <Row className='desktopFolder'>
                                {folders.filter((item: { isDeleted: any; }) => !item.isDeleted).map((folder: any, idx: number) => {
                                    return (
                                        <Col className='spaceFolders' key={idx} xs={4} md={4} lg={4} xl={4}>
                                            <Button className='folderBtn' onClick={() => { handleFolderClick(folder, folder.name); }} variant=''>
                                                <img src={folderImg}  className='folderSize'/>
                                                <p className='folderFont'>{folder.name}</p>
                                            </Button>
                                        </Col>
                                    )
                                })}
                            </Row>
                        </Col>
                    </Row>
                </Container>
                :
                <Row>
                    <Col className='memoryBox'>
                        {memoryItems.filter((item: { isDeleted: any; }) => !item.isDeleted).map((cardInfo: any, idx: number) => {
                            return (
                                <Button onClick={() => handlememoryClickDash(cardInfo)} key={idx} style={{ position: 'relative' }} variant=''>
                                    <img className='memoryCards' src={cardInfo.image} alt='Your memory image is here' />
                                    <div className='txtOnImg'>{cardInfo.title}</div>
                                    <div className='dateOnImg'>{cardInfo.date}</div>
                                </Button>
                            );
                        })}
                    </Col>
                </Row>
            }

            <Row className="desktopBtnRow">
                <Col className="desktopAddCol">
                    <Button variant='' onClick={() => { navigate("/AddMemory"); setIsMemoryEdit(false); }} className="desktopAddBtn" disabled={folders.filter((item: { isDeleted: any; }) => !item.isDeleted).length === 0}>Add Memory +</Button>
                </Col>
                <Col className="d-flex justify-content-center">
                    <Button onClick={handleClick} className="moreMemories" variant="">
                        {moreMemoryClicked ? "Go Back" : "Click for all memories"}
                    </Button>
                </Col>
                <Col className="desktopAddCol">
                    <Button variant='' onClick={() => { navigate("/AddFolder"); setIsEditFolder(false); }} className="desktopAddBtn2">Add Folder +</Button>
                </Col>
            </Row>
        </Container >
    )
}