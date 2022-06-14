import React, { useEffect } from "react";
import styled from "styled-components";
import Navbar from "../Navbar";
import scrollreveal from "scrollreveal";
import { Card, Button, Row, Col, Form } from "react-bootstrap";
import { Link } from 'react-router-dom';

export default function Login() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "bottom",
      distance: "100px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
        .panel
    `,
      {
        opacity: 0,
        interval: 100,
      }
    );
  }, []);
  return (
    <Section>
      <Navbar />
      <Card className="panel mt-5 col-md-6 offset-md-3">
        <Card.Header><h3>Login</h3></Card.Header>
        <Card.Body>
          <Card.Title><p>Please, use your provided credentials</p></Card.Title>
          <Card.Text>
            <Row className="my-3">
                <Col>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                    required
                  //   onChange={handleChange("email")}
                  />
                </Col>
            </Row>
            <Row>
                <Col>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                //   onChange={handleChange("password")}
                />
                </Col>
            </Row>
          </Card.Text>
          <Col className="d-block">  
          <Link to="/signup" className="btn btn-secondary float-start"> Register</Link>
          <Button variant="primary" className="float-end"> Login</Button>
          </Col>
        </Card.Body>
      </Card>
    </Section>
  );
}

const Section = styled.section`
  margin-left: 18vw;
  padding: 2rem;
  height: 100%;
  .bg-black-2 {
    background: #2f2f2f;
    border:1px solid #6f6f6f;
    padding: 40px;
    border-radius: 10px;
    align: center;
    }
    // .form-control {
    //     height: 40px;
    // }
  .grid {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 1rem;
    margin-top: 2rem;
    .row {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      height: 50%;
      gap: 1rem;
    }
    .form-group {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      height: 50%;
      color:white;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0;
    .grid {
      .row__one,
      .row__two {
        grid-template-columns: 1fr;
      }
    }
  }
`;