import React, { useState } from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/esm/Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default function AddHotel() {

  const onChange = (date) => {
    console.log('date: ', date);
  }

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div>
      <br></br>
      <h2><center><b>Add a blog</b></center></h2>
      <br></br>
      <Form>
        <Row>
          <Col xs={7}>
            <Form.Control placeholder="Blog Title" /> <br></br>
          </Col>
          {/* <h6>Hotel type :</h6> */}
          {/* <br></br> */}
          {/* <Col xs={7}>
            <Form.Check
              type="radio"
              id="Cabins"
              label="Cabins"
              value="Cabins"
            /> */}
            {/* <Col xs={7}>
              <Form.Check
                type="radio"
                id="Resorts"
                label="Resorts"
                value="Resorts" */}
              {/* />
            </Col>
            <Col xs={7}>
              <Form.Check
                type="radio"
                id="Villas"
                label="Villas"
                value="Villas"
              /> */}
            {/* </Col>
            <Col xs={7}>
              <Form.Check
                type="radio"
                id="Apartments"
                label="Apartments"
                value="Apartments"
              /> */}
            {/* </Col>
            <br></br>
            <Col xs={7}>
              <Form.Control placeholder="City" /> <br></br>
            </Col> */}
          {/* </Col> */}
        </Row>
        {/* <br></br> */}
        <Row>
          <Col xs={7}>
            <Form.Control placeholder="Blogger Name" />
          </Col>
          <br></br>
          {/* <Col>
            <Form.Control placeholder="State" />
          </Col>
          <Col>
            <Form.Control placeholder="Zip" />
          </Col> */}
        </Row>
        <br></br>
        <Row>
          <Col xs={7}>
            <h>Date: </h> 
            <DatePicker
              selected={startDate}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              onChange={date => setStartDate(date)}
              style={{marginBottom: 20}}
            /><br></br>
          </Col>
          <br></br>
          {/* <Col xs={7}>
            <Form.Control placeholder="Title" /> <br></br>
          </Col> */}
          <br></br>
          <Col xs={7}>
            <br></br>
          </Col>
          <br></br>
          <Col xs={7}>
            <Form.Control placeholder="Description" /> <br></br>
          </Col>
          <br></br>
          <Col xs={7}>
            <Form.Control placeholder="Ratings" /> <br></br>
          </Col>
          <br></br>
          <Col xs={7}>
            <Form.Control placeholder="Upload an image" /> <br></br>
            <div>
          <Button variant="primary">Upload an image</Button>
        </div>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <div>
          <center>
          <Button variant="primary">Save Blog</Button>
          </center>
        </div>
      </Form>
    </div>
  );
}
