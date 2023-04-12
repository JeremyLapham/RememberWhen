import React, { useContext, useEffect } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import logo from "../../assets/elephantLogo.svg";
import "./DashBoard.css";
import { useNavigate } from "react-router-dom";
import CustomNavbar from "../../Components/navComponent/NavbarComponent";
import AddIcon from "@mui/icons-material/Add";
import {
  checkToken,
  getMemoryItemsByUserId,
  loggedInData,
} from "../Services/DataService";
import { MyContext } from "../context";

export default function DashBoard() {
  const { username } = useContext(MyContext);
  const { memoryItems } = useContext(MyContext);
  const { setMemoryItems } = useContext(MyContext);
  const { setUsersId } = useContext(MyContext);
  const { moreMemoryClicked } = useContext(MyContext);
  const { setMoreMemoryClicked } = useContext(MyContext);
  const { setSelectedMemory } = useContext(MyContext);

  const navigate = useNavigate();

  const handleClick = () => {
    setMoreMemoryClicked(!moreMemoryClicked);
  };

  useEffect(() => {
    const GetLoggedInData = async () => {
      const loggedIn: {} = loggedInData();
      const LoggedIn = {
        userId: loggedIn["userId"],
        publisherName: loggedIn["publisherName"],
      };
      setUsersId(LoggedIn.userId);
      let userMemoryItems = await getMemoryItemsByUserId(LoggedIn.userId);
      setMemoryItems(userMemoryItems);
      console.log(userMemoryItems);
    };
    if (!checkToken()) {
      navigate("/SignInInfo");
    } else {
      GetLoggedInData();
    }
  }, []);

  const handleFolderClick = (item: any) => {
    setSelectedMemory(item);
    navigate("/Memory");
  };
  return (
    <Container fluid>
      <CustomNavbar />
      <Row className="d-flex align-items-center">
        <Col xs={6}>
          <img
            className="logoEle"
            src={logo}
            alt="remember when logo, elephant holding balloon"
          />
        </Col>
        <Col xs={6} className="d-flex flex-column justify-content-end">
          <Row>
            <div className="d-flex justify-content-end">
              <Button
                onClick={() => navigate("/AddMemory")}
                className="addNew"
                variant=""
                style={{ display: "flex", alignItems: "center" }}
              >
                <Col xs={9}>
                  <p className="addNewTxt">Add Memory</p>
                </Col>
                <Col xs={3} className="d-flex justify-content-center">
                  <AddIcon style={{ fontSize: "28px" }} />
                </Col>
              </Button>
            </div>
          </Row>
          <Row>
            <div className="d-flex justify-content-end">
              <Button
                onClick={() => navigate("/AddFolder")}
                className="addNewFolder"
                variant=""
                style={{ display: "flex", alignItems: "center" }}
              >
                <Col xs={9}>
                  <p className="addNewTxt">Add Folder</p>
                </Col>
                <Col xs={3} className="d-flex justify-content-center">
                  <AddIcon style={{ fontSize: "28px" }} />
                </Col>
              </Button>
            </div>
          </Row>
        </Col>
      </Row>
      {moreMemoryClicked ? (
        <Row>
          <Col className="rememberWhenTop">
            <h1 className="remmeberWhen">Remember When...</h1>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col className="helloTopTxt">
            <h1 className="helloTxt">
              Hello,{" "}
              <p style={{ color: "black" }} className="d-inline">
                {username}
              </p>
            </h1>
            <p className="welcomeTxt">
              Welcome to your memories, remember when...
            </p>
          </Col>
        </Row>
      )}

      {moreMemoryClicked ? (
        <Container>
          <Row>
            <Col className="d-flex justify-content-center folderDisplay">
              <Row>
                {memoryItems.map((folder: any, idx: number) => {
                  return (
                    <Col key={idx} xs={4}>
                      <Button
                        onClick={() => {
                          handleFolderClick(folder);
                        }}
                        variant=""
                      >
                        <img
                          style={{ width: 65, height: 65, borderRadius: 10 }}
                          src={folder.image}
                        />
                        <p className="folderFont">{folder.title}</p>
                      </Button>
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </Row>
        </Container>
      ) : (
        <Row>
          <Col className="memoryBox">
            {memoryItems.map((cardInfo: any, idx: number) => {
              return (
                <Button
                  key={idx}
                  style={{ position: "relative", pointerEvents: "none" }}
                  variant=""
                >
                  <img className="memoryCards" src={cardInfo.image} />
                  <div className="txtOnImg">{cardInfo.title}</div>
                  <div className="dateOnImg">{cardInfo.date}</div>
                </Button>
              );
            })}
          </Col>
        </Row>
      )}

      <Row className="desktopBtnRow">
        <Col className="desktopAddCol">
          <Button
            onClick={() => navigate("/AddMemory")}
            className="desktopAddBtn"
          >
            Add Memory +
          </Button>
        </Col>
        <Col className="d-flex justify-content-center">
          <Button onClick={handleClick} className="moreMemories" variant="">
            {moreMemoryClicked ? "Go Back" : "Click for all memories"}
          </Button>
        </Col>
        <Col className="desktopAddCol">
          <Button
            onClick={() => navigate("/AddFolder")}
            className="desktopAddBtn2"
          >
            Add Folder +
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
