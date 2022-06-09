import React, { useEffect, useState, useContext } from "react";
// import * as ReactBootStrap from 'react-bootstrap';
// import { Modal, Button } from 'react-bootstrap';
import api from "../../api/Api";
import { Link } from 'react-router-dom';

import { GlobalContext } from "../../Contexts/GlobalState";

const ProfileTable = () => {

  // const context = useContext(ProfileContext)
  const {transactions} = useContext(GlobalContext)

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

  // const [show, setShow] = useState(false);
    
  // const handleShow = () => setShow(true);
  // const handleClose = () => setShow(false);

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
  }, [fetchUrl]);

  // console.log(profiles)

//   function handleCloseModal(){
//     document.getElementById("myModal").classList.remove("show", "d-block", "modal-open");  
//     document.getElementsByClassName("modal-backdrop")[0].classList.remove("modal-backdrop");
// }

  return (
    <>
      <div>
        <h2 className="mb-4 mt-4">Profile List</h2>
      </div>
      <div className="d-flex flex-row mb-4">
        {/* <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#addModal"
        >
          Add New Profile
        </button> */}
        <Link to="/profiles/add" className="btn btn-primary">Add New Profile</Link>
        {/* <Button onClick={handleShow} className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></Button> */}
      </div>
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
                <Link to={`/profiles/edit/${profile.id}`} className="btn btn-primary"> Edit</Link>
                &nbsp;
                <button className="btn btn-danger btn-small">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ProfileTable;
