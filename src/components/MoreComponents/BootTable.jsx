import React, { useEffect, useState } from 'react'
// import * as ReactBootStrap from 'react-bootstrap';
import api from "../../api/Api";


const BootTable = () => {

    const [users, setUsers] = useState({users: []});
    useEffect(() => {
        const getUsers = async () => {
            const {data} = await api.get('/profiles')

            setUsers({users:data})

            // console.log(users);
        }
        getUsers();
    }, []);

  return (
    <>
    <div>
        <h2 className='mt-4 mb-4'>Users List</h2>
    </div>
    <div className="d-flex flex-row mb-4">
        <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#userModal"
        >
            Add New User
        </button>
    </div>
    <table className='table table-striped table-dark table-responsive table-bordered'>
        <thead>
            <tr>
                <th>No</th>
                <th>Title</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                users.users && users.users.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.firstname}</td>
                        <td>{item.lastname}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td className='flex content-justify-between'>
                            <button className='btn btn-primary btn-small'>Edit</button> &nbsp;
                            <button className='btn btn-danger btn-small'>Delete</button>
                        </td>
                    </tr>
                ))
            }
        </tbody>

    </table>

    <div
        className="modal fade modal-dark"
        id="userModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog bg-dark">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-warning" id="exampleModalLabel">
                ADD NEW USER
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
                      <textarea className="form-control" name="" id="" cols="30" rows="3" placeholder="Address"></textarea>
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
      </div>
    </>
  )
}

export default BootTable