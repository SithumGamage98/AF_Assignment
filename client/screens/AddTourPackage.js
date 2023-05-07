import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Footer from "../components/Footer.js";
import Button from "react-bootstrap/esm/Button";
export default function AddTourPackage() {
  return (
    <div>
      <br></br>
      <h2>Add a Tour and Sight Seeing Package</h2>
      <br></br>
      <Form>
        <Row>
          <Col xs={7}>
            <Form.Control placeholder="Tour and Sight Seeing Package Name" />{" "}
            <br></br>
          </Col>
          <h6>Tour Location type :</h6>
          <br></br>
          <Col xs={7}>
            <Form.Check
              type="radio"
              id="VillageSide"
              label="Village Side"
              value="VillageSide"
            />
            <Col xs={7}>
              <Form.Check
                type="radio"
                id="BeachVibe"
                label="Beach Vibe"
                value="BeachVibes"
              />
            </Col>
            <Col xs={7}>
              <Form.Check
                type="radio"
                id="HillCountry"
                label="Hill Country"
                value="HillCountry"
              />
            </Col>
            <Col xs={7}>
              <Form.Check
                type="radio"
                id="CityStay"
                label="City Stay"
                value="CityStay"
              />
            </Col>
            <br></br>
          </Col>
        </Row>
        <Row>
          <Col xs={7}>
            <Form.Control placeholder="Tour Destination" /> <br></br>
          </Col>
        </Row>
        <Row>
          <Col xs={7}>
            <Form.Control placeholder="Distance for Tour Destination from Colombo" />{" "}
            <br></br>
          </Col>
        </Row>
        <Row>
          <Col xs={7}>
            <Form.Control placeholder="Place for Accomodation" />
          </Col>
          <Col xs={5}>
            <Form.Control placeholder="No. of days for the Stay" />
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col xs={7}>
            <Form.Control placeholder="Maximum No. of visitors allowed per pack" />
          </Col>
          <Col xs={5}>
            <Form.Control placeholder="Total Charges for the package" />
          </Col>
        </Row>
        <br></br>
        <Row>
          <br></br>
          <Col xs={7}>
            <Form.Control placeholder="Details on Special Activities and Experiences around the destination" />{" "}
            <br></br>
          </Col>
          <br></br>
          <Col xs={7}>
            <Form.Control placeholder="Special instructions for the safety during the visit" />{" "}
            <br></br>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <Button variant="primary">Upload Destination image</Button>
            </div>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <div>
              <center>
                <Button variant="primary">
                  Save Tour and Sight Seeing Package
                </Button>
              </center>
            </div>
          </Col>
        </Row>
      </Form>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}
