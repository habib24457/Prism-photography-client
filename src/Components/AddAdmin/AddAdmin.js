
import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
//import Sidebar from '../Dashboard/Sidebar/Sidebar';
import AdminSidebar from '../Admin/AdminSidebar/AdminSidebar';
import './AddAdmin.css';
import { Notify } from '../Notify/Notify';
import {APILink} from "../../API_URL/API_URL";

const AddAdmin = () => {

    //'https://infinite-castle-13224.herokuapp.com/addOneAdmin'
    //const [file, setFile] = useState(null);
    const [info, setInfo] = useState({});
    const [adminData, setAdminData] = useState([]);

    useEffect(() => {
        loadAvailableAmin();
    }, [])

    const loadAvailableAmin =()=>{
        fetch(APILink+"/getAdmin")
            .then(response => response.json())
            .then(result => {
                setAdminData(result);
            });
    };

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
        //console.log(e.target.value);
    }
    console.log(info);
    const addNewAdmin = (e) => {
        e.preventDefault();
        fetch(APILink+'/addOneAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => {
                console.log(res.status)
                if(res.status === 200){
                    loadAvailableAmin();
                }else{
                    loadAvailableAmin();
                }
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleRemoveAdmin = (id) => {
        fetch(`${APILink}/removeAdmin/${id}`, {
            method: 'DELETE'
        }).then(result => {
                if(result.status===200){
                    loadAvailableAmin();
                }else{
                    loadAvailableAmin();
                }
                console.log(result);
                //window.location.reload();
            })
    }


    return (
        <>
            <div className="admin row">
                <div className="col-md-3">
                    <AdminSidebar></AdminSidebar>
                </div>

                <div className="col-md-3 mt-5">
                    <Form className="admin-form-design shadow p-5">
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

                        <Button onClick={(e)=>addNewAdmin(e)} variant="warning" type="submit">
                            Add Admin
                         </Button>
                    </Form>

                </div>

                <div className="col-md-4">
                    <h4 className="all-text-color text-center">Available admins: {adminData.length}</h4>
                    <ul>
                        {
                            adminData.map(admin =>
                                <li className="d-flex justify-content-between mb-2">Name: {admin.name} Email: {admin.email} <button onClick={() => handleRemoveAdmin(admin._id)} className="btn btn-danger">Remove</button></li>
                            )
                        }
                    </ul>
                </div>
            </div>

        </>
    );
};

export default AddAdmin;