
import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
//import Sidebar from '../Dashboard/Sidebar/Sidebar';
import AdminSidebar from '../Admin/AdminSidebar/AdminSidebar';
import './AddAdmin.css';
import { Notify } from '../Notify/Notify';

const AddAdmin = () => {

    //'https://infinite-castle-13224.herokuapp.com/addOneAdmin'
    //const [file, setFile] = useState(null);
    const [info, setInfo] = useState({});
    const [adminData, setAdminData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/getAdmin')
            .then(response => response.json())
            .then(result => {
                setAdminData(result);
            })
    }, [])

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
        //console.log(e.target.value);
    }

    // const handleFileChange = (e) => {
    //     const newFile = e.target.files[0];
    //     setFile(newFile);
    //     //console.log(newFile);
    // }

    const handleSubmit = () => {

        //const formData = new FormData()
        //console.log(info);
        //formData.append('file', file);
        //formData.append('name', info.name);
        //formData.append('email', info.email);


        fetch('http://localhost:5000/addOneAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                Notify(4);
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleRemoveAdmin = (id) => {
        fetch(`http://localhost:5000/removeAdmin/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(result => {
                console.log(result);
                window.location.reload();
            })
    }


    return (
        <>
            <div className="admin row">
                <div className="col-md-3">
                    <AdminSidebar></AdminSidebar>
                </div>

                <div className="col-md-3 mt-5">
                    <Form onSubmit={handleSubmit} className="admin-form-design shadow p-5">
                        <Form.Text className="text-muted">
                            Register as an Admin
                            </Form.Text>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onBlur={handleBlur} type="email" name="email" placeholder="Enter email" required />

                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control onBlur={handleBlur} type="text" name="name" placeholder="Enter your name" required />

                        </Form.Group>

                        {
                            /** 
                        <Form.Group>
                            <Form.File onChange={handleFileChange} id="exampleFormControlFile1" label="Example file input" />
                        </Form.Group>
                        */
                        }

                        <Button variant="warning" type="submit">
                            Add Admin
                         </Button>
                    </Form>

                </div>

                <div className="col-md-4">
                    <h4 className="all-text-color text-center">Available admins: {adminData.length}</h4>
                    <ul>
                        {
                            adminData.map(admin =>
                                <li className="d-flex justify-content-between mb-2">{admin.name} <button onClick={() => handleRemoveAdmin(admin._id)} className="btn btn-danger">Remove</button></li>
                            )
                        }
                    </ul>
                </div>
            </div>

        </>
    );
};

export default AddAdmin;