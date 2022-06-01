import React, { useEffect, useState } from "react";
// import * as ReactBootStrap from 'react-bootstrap';
import api from "../../api/Api";

const BootTable = () => {
  const [profiles, setProfiles] = useState([]);
  const fetchUrl = "/profiles";

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
        <h2 className="mb-4 mt-4">Profile List</h2>
      </div>
      <div className="d-flex flex-row mb-4">
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#addProfileModal"
        >
          Add New Profile
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
                  data-bs-target="#editProfileModal"
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
        id="addProfileModal"
        tabIndex={0}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog bg-dark">
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
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-success">
                Save changes
              </button>
            </div>
          </div>
        </div>

        {/* EDIT FORM MODAL */}
        <div
          className="modal fade"
          id="editProfileModal"
          tabIndex={0}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">...</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BootTable;
