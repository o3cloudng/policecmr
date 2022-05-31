import React from 'react'
import * as ReactBootstrap from 'react-bootstrap';

const BootTable = () => {
  return (
    <>
    <ReactBootstrap.Table table table-striped table-dark table-responsive>
        <thead className='mt-5'>
            <tr className='text-white'>
                <th>No</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr className='text-white'>
                <td>1</td>
                <td>Bolanle</td>
                <td>Anu</td>
                <td>bola@gmail.com</td>
                <td>08052024889</td>
                <td>Edit</td>
            </tr>
        </tbody>

    </ReactBootstrap.Table>
    </>
  )
}

export default BootTable