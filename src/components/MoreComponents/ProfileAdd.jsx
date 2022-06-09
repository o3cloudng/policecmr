import React, {  } from "react";
import { Card, Button, Row, Col, Form } from "react-bootstrap";
import { Link } from 'react-router-dom';
// import api from "../../api/Api";

const ProfileAdd = () => {
  
  return (
    <>
      <Card className="mt-5 col-md-8 offset-md-2">
        <Card.Header><h3>ADD NEW PROFILE</h3></Card.Header>
        <Card.Body>
          <Card.Title>Create profile for new registration</Card.Title>
          <Card.Text>
            <Row className="mb-3">
              <Col>
                <Form.Control
                  type="text"
                  name="firstname"
                  placeholder="First name"
                  required
                //   onChange={handleChange("firstname")}
                />
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  name="lastname"
                  placeholder="Last name"
                  required
                //   onChange={handleChange("lastname")}
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  required
                //   onChange={handleChange("email")}
                />
              </Col>
              <Col>
                <Form.Control
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  required
                //   onChange={handleChange("phone")}
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <Form.Control
                  type="text"
                  name="bioID"
                  placeholder="Biometric ID"
                  required
                //   onChange={handleChange("bioID")}
                />
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  name="state"
                  placeholder="State"
                  required
                //   onChange={handleChange("state")}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Control
                  as="textarea"
                  name="address"
                  placeholder="Address"
                  rows={3}
                //   onChange={handleChange("address")}
                />
              </Col>
            </Row>
          </Card.Text>
          <Col className="d-block">  
          <Link to="/profiles" className="btn btn-secondary float-start"> Back</Link>
          <Button variant="primary" className="float-end"> Add Profile</Button>
          </Col>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProfileAdd;
