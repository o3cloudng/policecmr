import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import api from "../../api/Api";
import { Link } from "react-router-dom";

const ProfileTable = () => {

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
              {/* if (!profiles){
                <tr><td colspan="6">Loading...</td></tr>
              } */}
              {profiles.map((profile) => (
                <tr key={profile.id}>
                  <td>{profile.title}</td>
                  <td>{profile.firstname}</td>
                  <td>{profile.lastname}</td>
                  <td>{profile.email}</td>
                  <td>{profile.phone}</td>
                  <td>
                    <Link
                      to={{pathname:`/profiles/edit/${profile.id}`, state:{profile:profile}}}
                      className="btn btn-primary"
                    >
                      Edit
                    </Link>
                    &nbsp;
                    <Link
                      to={{pathname:`/profiles/delete/${profile.id}`, state:{profile:profile}}}
                      className="btn btn-danger"
                    >
                      Delete
                    </Link>
                    &nbsp;
                    <Link
                      to={{pathname:`/profiles/view/${profile.id}`, state:{profile:profile}}}
                      className="btn btn-warning"
                    >
                      View
                    </Link>
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
