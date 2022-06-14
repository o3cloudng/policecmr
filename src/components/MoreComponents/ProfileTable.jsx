import React, { useEffect, useState, useContext } from "react";
import { Card } from "react-bootstrap";
import api from "../../api/Api";
import { Link } from "react-router-dom";

import { GlobalContext } from "../../Contexts/GlobalState";

const ProfileTable = () => {
  // const context = useContext(ProfileContext)
  const { transactions } = useContext(GlobalContext);

  console.log(transactions);

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

  return (
    <>
      <div>
        <h2 className="mb-4 mt-4">Profile List</h2>
      </div>
      <Card className="panel mt-5 col-md-12">
        <Card.Header className="d-block">
          <h3 className="float-start mt-2">Profile List</h3>
          <Link to="/profiles/add" className="btn btn-primary float-end">
            Add New Profile
          </Link>
        </Card.Header>
        <Card.Body>
          <table className="table table-striped table-dark table-responsive table-bordered">
            <thead>
              <tr>
                <th>Title</th>
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
                  <td>{profile.title}</td>
                  <td>{profile.firstname}</td>
                  <td>{profile.lastname}</td>
                  <td>{profile.email}</td>
                  <td>{profile.phone}</td>
                  <td>
                    <Link
                      to={`/profiles/edit/${profile.id}`}
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

export default ProfileTable;
