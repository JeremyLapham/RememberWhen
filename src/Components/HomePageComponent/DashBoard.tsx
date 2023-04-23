import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Row,
  Navbar,
  Offcanvas,
  Button,
  Nav,
} from "react-bootstrap";
import logo from "../../assets/elephantLogo.svg";
import placer from "../../assets/placer.png";
import placerTwo from "../../assets/placerTwo.png";
import folderPic from "../../assets/folderpic.png";
import "./DashBoard.css";
import { useNavigate } from "react-router-dom";
import CustomNavbar from "../../Components/navComponent/NavbarComponent";
import AddIcon from "@mui/icons-material/Add";

export default function DashBoard() {
  const [hello, setHello] = useState("Jeremy");
  const [moreMemoryClicked, setMoreMemoryClicked] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setMoreMemoryClicked(!moreMemoryClicked);
  };

  const [placerCard, setPlacerCard] = useState([
    {
      overImgTxt: "Our first date",
      dateTxt: "2/14/23",
      img: placer,
    },
    {
      overImgTxt: "Bowling trip",
      dateTxt: "5/26/23",
      img: placerTwo,
    },
  ]);
  interface Folder {
    folderName: string;
    displayedImg: any;
    memoryTitle: string;
    memoryDate: any;
    passData: any;
  }

  const [folder1, setFolder1] = useState<Folder[]>([
    {
      folderName: "Dates",
      displayedImg: placer,
      memoryTitle: "First Date",
      memoryDate: "2/14/23",
      passData: "",
    },
    {
      folderName: "Dates",
      displayedImg: placer,
      memoryTitle: "First Date",
      memoryDate: "2/14/23",
      passData: "",
    },
  ]);
  const [folder2, setFolder2] = useState<Folder[]>([
    {
      folderName: "Trips",
      displayedImg: placerTwo,
      memoryTitle: "Bowling trip",
      memoryDate: "5/26/23",
      passData: "",
    },
    {
      folderName: "Trips",
      displayedImg: placerTwo,
      memoryTitle: "Bowling trip",
      memoryDate: "5/26/23",
      passData: "",
    },
  ]);
  const [folder3, setFolder3] = useState<Folder[]>([
    {
      folderName: "Camping",
      displayedImg: "",
      memoryTitle: "Camping",
      memoryDate: "1/14/23",
      passData: "",
    },
    {
      folderName: "Camping",
      displayedImg: "",
      memoryTitle: "Camping",
      memoryDate: "1/14/23",
      passData: "",
    },
  ]);

  const [placerFolder, setPlacerFolder] = useState<Folder[]>([
    {
      folderName: "Dates",
      displayedImg: placer,
      memoryTitle: "First Date",
      memoryDate: "2/14/23",
      passData: folder1,
    },
    {
      folderName: "Trips",
      displayedImg: placerTwo,
      memoryTitle: "Bowling trip",
      memoryDate: "5/26/23",
      passData: folder2,
    },
    {
      folderName: "Camping",
      displayedImg: "",
      memoryTitle: "Camping",
      memoryDate: "1/14/23",
      passData: folder3,
    },
  ]);

  const handleFolderClick = (folder1: any, fileName: string) => {
    navigate("/ClickedMemory", { state: { folders: folder1, name: fileName } });
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
            <h1 className="remmeberWhen">lets remember your memories...</h1>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col className="helloTopTxt">
            <h1 className="helloTxt">
              Hello,{" "}
              <p style={{ color: "black" }} className="d-inline">
                {hello}
              </p>
            </h1>
            <p className="welcomeTxt">
              welcome to your memory album, remember when...
            </p>
          </Col>
        </Row>
      )}

      {moreMemoryClicked ? (
        <Container className="folderBoxCont">
          <Row className="folderBox">
            <Col className="d-flex justify-content-center folderDisplay">
              <Row>
                {placerFolder.map((folder, idx) => {
                  return (
                    <Col key={idx} xs={4}>
                      <Button
                        onClick={() => {
                          handleFolderClick(folder.passData, folder.folderName);
                        }}
                        variant=""
                      >
                        <img src={folderPic} />
                        <p className="folderFont">{folder.folderName}</p>
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
            {placerCard.map((cardInfo, idx) => {
              return (
                <Button
                  key={idx}
                  style={{ position: "relative", pointerEvents: "none" }}
                  variant=""
                >
                  <img className="memoryCards" src={cardInfo.img} />
                  <div className="txtOnImg">{cardInfo.overImgTxt}</div>
                  <div className="dateOnImg">{cardInfo.dateTxt}</div>
                </Button>
              );
            })}
          </Col>
        </Row>
      )}


      <Row className="desktopBtnRow">
      <Col className="desktopAddCol">
          <Button onClick={() => navigate("/AddMemory")} className="desktopAddBtn">Add Memory +</Button>
        </Col>
        <Col className="d-flex justify-content-center">
          <Button onClick={handleClick} className="moreMemories" variant="">
            {moreMemoryClicked ? "Go Back" : "Click for all memories"}
          </Button>
        </Col>
        <Col className="desktopAddCol">
          <Button onClick={() => navigate("/AddFolder")} className="desktopAddBtn2">Add Folder +</Button>
        </Col>
      </Row>
    </Container>
  );
}
