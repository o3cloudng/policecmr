import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../api/Api";

import { ReactNotifications, Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

// import Animate from 'animate.css-react';
// import 'animate.css/animate.css';

const ProfileEdit = () => {
  const fetchUrl = "/profiles/edit";
  const [profile, setProfile] = useState()
  const [data, setData] = useState()
  const {id} = useParams();
  console.log(id)
  
  useEffect((id) => {
    const getProfile = async () => {
      console.log("Getting ID...")
      console.log(id);
      const data = await api.get('http://localhost:8000/api/profiles/',{
        id:id
      });
      // console.log(data)
      // setData(data.data);
    };
    getProfile();
  }, [fetchUrl]);

  const initialText = 'Update Profile';
  const [buttonText, setButtonText] = useState(initialText);
  const enabled = '';
  const [disabled, setDisabled] = useState(enabled);

  const navigate = useNavigate();

  const update = async (e) => {
      e.preventDefault();
      setButtonText('Loading...');
      setDisabled('true');
  
      await api
        .post(
          fetchUrl,
          {
            title: 'Mr',
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            phone: data.phone,
            bioid: data.bioID,
            address: data.address,
            state: data.state,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res.data)
          if(res.data) {
            // window.location = "/profiles";
            Store.addNotification({
              title: "Success",
              message: "New profile added successfully",
              type: "success",
              insert: "top",
              container: "top-right",
              animationIn: ["animate__animated", "animate__fadeIn"],
              animationOut: ["animate__animated", "animate__fadeOut"],
              dismiss: {
                duration: 5000,
                onScreen: true
              }
            });

            navigate('/profiles');
          }
        })
        .catch((err) => console.log(err));
      }

  
 

  const handleChange = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    // console.log(newdata);
  };

  return (
    <>
      <Card className="mt-5 col-md-8 offset-md-2">
        <Card.Header>
          <h3>CREATE PROFILE</h3>
        </Card.Header>
        <Card.Body>
          {/* <form onSubmit={(e) => update(e)}>
            <Card.Title>Create profile for vehicle owners</Card.Title>
            <Card.Text>
              <Row className="mb-3">
                <Col>
                  <Form.Control
                    onChange={(e) => handleChange(e)}
                    type="text"
                    id="firstname"
                    value={data.firstname}
                    placeholder="First name"
                    required
                  />
                </Col>
                <Col>
                  <Form.Control
                    onChange={(e) => handleChange(e)}
                    type="text"
                    id="lastname"
                    value={data.lastname}
                    placeholder="Last name"
                    required
                  />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col>
                  <Form.Control
                    onChange={(e) => handleChange(e)}
                    type="email"
                    id="email"
                    value={data.email}
                    placeholder="name@example.com"
                    required
                  />
                </Col>
                <Col>
                  <Form.Control
                    onChange={(e) => handleChange(e)}
                    type="tel"
                    id="phone"
                    value={data.phone}
                    placeholder="Phone number"
                    required
                  />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col>
                  <Form.Control
                    onChange={(e) => handleChange(e)}
                    type="text"
                    id="bioID"
                    value={data.bioID}
                    placeholder="Biometric ID"
                    required
                  />
                </Col>
                <Col>
                  <Form.Control
                    onChange={(e) => handleChange(e)}
                    type="text"
                    id="state"
                    value={data.state}
                    placeholder="State office"
                    required
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Control
                    onChange={(e) => handleChange(e)}
                    as="textarea"
                    id="address"
                    value={data.address}
                    placeholder="Other information"
                    rows={3}
                  />
                </Col>
              </Row>
            </Card.Text>
            <Col className="d-block">
              <Link to="/users" className="btn btn-secondary float-start">
                {" "}
                Back
              </Link>
              <Button variant="primary" disabled={disabled}  type="submit" className="float-end">
                {buttonText}
              </Button>
            </Col>
          </form> */}
        </Card.Body>
      </Card>
    </>
  );
};

export default ProfileEdit;
// ,{
//   headers: {
//     ContentType: "application/json"
//   }
// }
