import React, { useEffect, useState, useContext } from "react";
import { Card } from "react-bootstrap";
import api from "../../api/Api";
import { Link } from "react-router-dom";

import { GlobalContext } from "../../Contexts/GlobalState";

const UsersTable = () => {
  // const context = useContext(ProfileContext)
  const { transactions } = useContext(GlobalContext);

  console.log(transactions);

  const [profiles, setProfiles] = useState([]);
  // const [firstname, setFirstname] = useState("");
  // const [lastname, setLastname] = useState("");
  // const [email, setEmail] = useState("");
  // const [title, setTitle] = useState("");
  // const [phone, setPhone] = useState("");
  // const [bioID, setBioID] = useState("");
  // const [location, setLocation] = useState("");
  // const [address, setAddress] = useState("");

  const fetchUrl = "/profiles";

  //   const handleSubmit = (e) => {
  //       e.prevetnDefault()
  //       const profile = {firstname, lastname, email, phone, bioID, location}
  //       console.log(profile)
  //   }
  // const addProfile = async (e) => {
  //   e.preventDefault();

  //   await api
  //     .post(
  //       fetchUrl,
  //       {
  //         title: title,
  //         firstname: firstname,
  //         lastname: lastname,
  //         email: email,
  //         phone: phone,
  //         bioid: bioID,
  //         address: address,
  //         state: location,
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       setProfiles(res);
  //       handleCloseModal();
  //     })
  //     .catch((err) => console.log(err));
  // };

  useEffect(() => {
    const getProfiles = async () => {
      const data = await api.get(fetchUrl);
      // console.log(data.data)
      setProfiles(data.data);
    };
    getProfiles();
  }, [profiles]);

  // console.log(profiles)

  //   function handleCloseModal(){
  //     document.getElementById("myModal").classList.remove("show", "d-block", "modal-open");
  //     document.getElementsByClassName("modal-backdrop")[0].classList.remove("modal-backdrop");
  // }

  return (
    <>
      <div>
        <h2 className="mb-2 mt-4">Users List</h2>
      </div>
      <Card className="panel mt-5 col-md-12">
        <Card.Header className="d-block">
          <h3 className="float-start mt-2">Create Account</h3>
          <Link to="/users/add" className="btn btn-primary float-end">
            Add New User
          </Link>
        </Card.Header>
        <Card.Body>
          <table className="table table-striped table-dark table-responsive table-bordered">
            <thead>
              <tr>
                <th>No</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {profiles.map((profile) => (
                <tr key={profile.id}>
                  <td>{profile.id}</td>
                  <td>{profile.firstname}</td>
                  <td>{profile.lastname}</td>
                  <td>{profile.email}</td>
                  <td>{profile.phone}</td>
                  <td>
                    <Link
                      to={`/users/edit/${profile.id}`}
                      className="btn btn-primary"
                    >
                      {" "}
                      Edit
                    </Link>
                    &nbsp;
                    <button className="btn btn-danger btn-small">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card.Body>
      </Card>
    </>
  );
};

export default UsersTable;
