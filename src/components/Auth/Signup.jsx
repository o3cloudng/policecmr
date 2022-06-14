import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../Navbar";
import scrollreveal from "scrollreveal";
import { Card, Button, Row, Col, Form } from "react-bootstrap";
import { Link } from 'react-router-dom';
// import Select from "react-select";
// import { MdApi } from "react-icons/md";
// import axios from 'axios';
import api from "../../api/Nigeria";


function Signup() {
    const [data, setData] = useState([]);
    useEffect(() => {
        api.get('/nigeriastates')
        .then(res => {
            console.log("Gettig Error:::", res.data)
            setData(res.data);
        })
        .catch(err => console.log(err))
    }, []);

    const result = data.map((data, index) => {
        return (
            <option value="{data.state}">{data.state} </option>
        )
    }) 
    // const data = async () => {
    //     try {
    //         const response = await axios.get('/nigeriatates');
    //         setData(response.data);
    //     } catch (err){
    //         if (err.response) {
    //             console.log(err.response.data);
    //             console.log(err.response.header);
    //             console.log(err.response.status);
    //         } else {
    //             console.log(`Error: ${err.message}`);
    //         }
    //     }
    // }

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
    }, [data]);
    return (
    <Section>
        <Navbar />
        <Card className="panel mt-5 col-md-8 offset-md-2">
        <Card.Header><h3>Create Account</h3></Card.Header>
        <Card.Body>
          <Card.Title>Create account for administrators</Card.Title>
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
          <Link to="/login" className="btn btn-secondary float-start"> Login</Link>
          <Button variant="primary" className="float-end"> Submit</Button>
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
    //     height: 60px;
    //     border:1px solid #fcfcfc;
    // }
    .css-6j8wv5-Input {
        height: 50px;
        border:1px solid #fcfcfc;
    }
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

export default Signup;