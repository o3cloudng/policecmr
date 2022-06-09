import React, { useEffect, useState } from "react";
// import * as ReactBootStrap from 'react-bootstrap';
import api from "../../api/Api";

const BootTable = () => {
  const [profiles, setProfiles] = useState([]);
  const fetchUrl = "/profiles";

  const [addProfile, setAddProfile] = useState({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      bioID: "",
      state: "",
      address: ""
  })

  const handleChange = (input) => (e) => {
      e.preventDefault()

      console.log(addProfile);

      setAddProfile({...addProfile, [input]: e.target.value})
  }

  const handleAddProfile = (e) => {
      e.preventDefault()

      const newProfile = {
        firstname: addProfile.firstname,
        lastname: addProfile.lastname,
        email: addProfile.email,
        phone: addProfile.phone,
        bioID: addProfile.bioID,
        state: addProfile.state,
        address: addProfile.address
      }

      const newProfiles = [...profiles, newProfile]
      setProfiles(newProfiles)
  }

  useEffect(() => {
    const getProfiles = async () => {
      const data = await api.get(fetchUrl);
      // console.log(data.data)
      setProfiles(data.data);
    };
    getProfiles();
  }, [fetchUrl]);

  // console.log(profiles)

  return (
    <>
      <div>
        <h2 className="mb-4 mt-4">User List</h2>
      </div>
      <div className="d-flex flex-row mb-4">
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#addModal"
        >
          Add New User
        </button>
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
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#editModal"
                >
                  Edit
                </button>
                &nbsp;
                <button className="btn btn-danger btn-small">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ADD FORM MODAL */}
      <div
        className="modal fade"
        id="addModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog bg-dark">
          <form onSubmit={handleAddProfile}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-warning" id="exampleModalLabel">
                  ADD NEW PROFILE
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="row mb-4">
                  <div className="col-md-12 form-row d-flex flex-row">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                        required
                        onChange={handleChange("firstname")}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last name"
                        required
                        onChange={handleChange("lastname")}
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col-md-12 form-row d-flex flex-row">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange("email")}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone number"
                        required
                        onChange={handleChange("phone")}
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col-md-12 form-row d-flex flex-row">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Biometric ID"
                        required
                        onChange={handleChange("bioID")}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="State"
                        required
                        onChange={handleChange("state")}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="form-row">
                    <textarea
                      className="form-control"
                      name=""
                      id=""
                      cols="30"
                      rows="3"
                      placeholder="Address"
                      onChange={handleChange("address")}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-default float-start"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-success float-end">
                  Create Profile
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* EDIT FORM MODAL */}
      <div
        className="modal fade"
        id="editModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <form>
          <div className="modal-dialog bg-dark">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-warning" id="exampleModalLabel">
                  EDIT PROFILE
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="row mb-4">
                  <div className="col-md-12 form-row d-flex flex-row">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last name"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col-md-12 form-row d-flex flex-row">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone number"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col-md-12 form-row d-flex flex-row">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Biometric ID"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="State"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="form-row">
                    <textarea
                      className="form-control"
                      name=""
                      id=""
                      cols="30"
                      rows="3"
                      placeholder="Address"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="modal-footer d-flex">
                <button
                  type="button"
                  className="btn btn-default float-start"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-success float-end">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default BootTable;
