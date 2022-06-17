import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col, Form } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../../api/Api";

import { Store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

// import Animate from 'animate.css-react';
// import 'animate.css/animate.css';

const ProfileDelete = () => {
//   const fetchUrl = "/profiles/";
  const [profile, setProfile] = useState()
  const id = useParams();

  useEffect(() => {
    const getProfile = async () => {
      const data = await api.get(`/profiles/${id.id}`);
      console.log(data);
      setData(data.data);
    };
    getProfile();
  }, [id]);

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    bioID: "",
    state: "",
    address: "",
  });

  const initialText = "Delete Profile";
  const [buttonText, setButtonText] = useState(initialText);
  const enabled = "";
  const [disabled, setDisabled] = useState(enabled);

  const navigate = useNavigate();

  const deleteProfile = async (e) => {
    e.preventDefault();
    setButtonText("Loading...");
    setDisabled("true");

    console.log("Updating Request....");
    console.log(data);

    await api
      .delete(
        `/profiles/${id.id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          Store.addNotification({
            title: "Deleted",
            message: "Profile deleted successfully",
            type: "danger",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true,
            },
          });

          navigate("/profiles");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Card className="mt-5 col-md-8 offset-md-2">
        <Card.Header>
            <h3> Delete? </h3>
        </Card.Header>
        <Card.Body>
            <form onSubmit= {(e) => deleteProfile(e)}>
                <p>This profile will be deleted permanently. <br /> Please confirm Delete</p>

            <Button className="btn btn-primary" type="submit">
                Delete
            </Button>
            &nbsp;
            <Link
                to={`/profiles/`}
                className="btn btn-danger"
            >
                Cancel
            </Link>
            </form>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProfileDelete;
