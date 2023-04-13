import React, { useState } from "react";
import { Col, Container, Row, Button, Form, Toast } from "react-bootstrap";
import sound from "../../assets/sound.png";
import "./AddMemory.css";
import { useNavigate } from "react-router-dom";
import CustomNavbar from "../../Components/navComponent/NavbarComponent";

export default function AddMemory() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedAudio, setSelectedAudio] = useState("");
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const handleFileSelect = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleAudio = () => {
    setSelectedAudio(sound);
  };

  const handleBackToHome = () => {
    navigate("/DashBoard");
  };

  return (
    <Container fluid>
      <Row className="mobileAddImgRow">
        <Col xs={6}>
          <Toast
            className="addToast"
            onClose={() => setShow(false)}
            show={show}
            delay={3000}
            autohide
          >
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Remember when</strong>
              <small>1s ago</small>
            </Toast.Header>
            <Toast.Body>Memory has been added</Toast.Body>
          </Toast>
        </Col>
      </Row>
      <CustomNavbar />
      <h1 className="addMemoryTitle">
        add your{" "}
        <p style={{ color: "#848383" }} className="d-inline">
          memory...
        </p>
      </h1>

      <Row className="desktopCenterRow">
        <Col md={4}>
          <Row className="mobileAddImgRow">
            <Col className="addImgCol">
              <Form.Group
                className="mb-3 d-flex flex-column align-items-center"
                controlId="Image"
              >
                <Form.Label className="addImgTxt">Add image</Form.Label>
                <Button style={{ position: "relative" }} id="custom-input">
                  {selectedImage && (
                    <img
                      className="selectedImg"
                      src={URL.createObjectURL(selectedImage)}
                      alt="Selected image"
                    />
                  )}
                  <Form.Control
                    className="input1"
                    onChange={handleFileSelect}
                    type="file"
                    accept="image/png, image/jpg"
                    placeholder="Enter an image"
                  />
                </Button>
              </Form.Group>
            </Col>
          </Row>
          <Row className="addAudioRow">
            <Col className="addAudioCol">
              <Form.Group className="mb-3 d-flex flex-column align-items-center">
                <Form.Label className="addAudioTxt">Add audio</Form.Label>
                <Button style={{ position: "relative" }} id="custom-input2">
                  {selectedAudio && (
                    <img
                      className="selectedImg2"
                      src={selectedAudio}
                      alt="Selected image"
                    />
                  )}
                  <Form.Control
                    className="input2"
                    onChange={handleAudio}
                    type="file"
                    accept="audio/mp3"
                  />
                </Button>
              </Form.Group>
            </Col>
          </Row>
        </Col>

        <Col md={4}>
          <Row className="mobileAddInputRow">
            <Col className="addFolderCol">
              <Form.Group className="mb-3 d-flex flex-column align-items-center">
                <Form.Label className="addFolderInputTxt">Folder</Form.Label>
                <Form.Select className="textInputs">
                  <option hidden>Folder</option>
                  <option>Dates</option>
                  <option>Trips</option>
                  <option>Camping</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row className="mobileAddInputRow">
            <Col>
              <Form.Group className="mb-3 d-flex flex-column align-items-center">
                <Form.Label className="addMemoryTxt">Memory Title</Form.Label>
                <Form.Control
                  className="textInputs"
                  type="text"
                  placeholder="Memory Title"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mobileAddInputRow">
            <Col>
              <Form.Group className="mb-3 d-flex flex-column align-items-center">
                <Form.Label className="addDateTxt">Date</Form.Label>
                <Form.Control
                  className="textInputs"
                  type="text"
                  placeholder="Date"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mobileAddInputRow">
            <Col>
              <Form.Group className="mb-3 d-flex flex-column align-items-center">
                <Form.Label className="addDescriptionTxt">
                  Description
                </Form.Label>
                <Form.Control
                  className="textInputsDescription"
                  placeholder="Description"
                />
              </Form.Group>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="mobileAddRow">
        <Col className="d-flex justify-content-center">
          <Button onClick={() => setShow(true)} className="addBtn" variant="">
            Add
          </Button>
        </Col>
        <Col className="d-flex justify-content-center">
          <Button
            onClick={handleBackToHome}
            className="addCancelBtn"
            variant=""
          >
            Cancel
          </Button>
        </Col>
      </Row>

      <Row className="desktopAddRow">
        <Col lg={2} className="d-flex justify-content-center">
          <Button onClick={() => setShow(true)} className="addBtn" variant="">
            Add
          </Button>
        </Col>
        <Col lg={2} className="d-flex justify-content-center">
          <Button
            onClick={handleBackToHome}
            className="addCancelBtn"
            variant=""
          >
            Cancel
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
