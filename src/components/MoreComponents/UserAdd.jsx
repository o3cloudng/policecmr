import React, { useState } from "react";
import { Card, Button, Row, Col, Form } from "react-bootstrap";
import { Link } from 'react-router-dom';
// import api from "../../api/Api";

const UserAdd = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [rank, setRank] = useState("");
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");

  const handleChange = (e) => {

  }



  return (
    <>
      <Card className="mt-5 col-md-8 offset-md-2">
        <Card.Header><h3>CREATE NEW USER ACCOUNT</h3></Card.Header>
        <Card.Body>
          <Card.Title>Create Admin account for official use.</Card.Title>
          <Card.Text>
            <Row className="mb-3">
              <Col>
                <Form.Control
                  type="text"
                  name="firstname"
                  value={firstname}
                  placeholder="First name"
                  required
                  onChange={handleChange("firstname")}
                />
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  name="lastname"
                  value={lastname}
                  placeholder="Last name"
                  required
                  onChange={handleChange("lastname")}
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <Form.Control
                  type="email"
                  name="email"
                  value={email}
                  placeholder="name@example.com"
                  required
                  onChange={handleChange("email")}
                />
              </Col>
              <Col>
                <Form.Control
                  type="tel"
                  name="phone"
                  value={phone}
                  placeholder="Phone number"
                  required
                  onChange={handleChange("phone")}
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <Form.Control
                  type="text"
                  name="rank"
                  value={rank}
                  placeholder="Rank"
                  required
                  onChange={handleChange("rank")}
                />
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  name="location"
                  value={location}
                  placeholder="State office"
                  required
                  onChange={handleChange("location")}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Control
                  as="textarea"
                  name="address"
                  value={address}
                  placeholder="Other information"
                  rows={3}
                  onChange={handleChange("address")}
                />
              </Col>
            </Row>
          </Card.Text>
          <Col className="d-block">  
          <Link to="/users" className="btn btn-secondary float-start"> Back</Link>
          <Button variant="primary" className="float-end"> Add Account</Button>
          </Col>
        </Card.Body>
      </Card>
    </>
  );
};

export default UserAdd;
