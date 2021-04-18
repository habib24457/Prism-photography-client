
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import './AddAdmin.css';

const AddAdmin = () => {

    //'https://infinite-castle-13224.herokuapp.com/addOneAdmin'
    const [file, setFile] = useState(null);
    const [info, setInfo] = useState({});

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
        //console.log(e.target.value);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
        //console.log(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        console.log(info);
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);

        fetch('https://infinite-castle-13224.herokuapp.com/addOneAdmin', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }


    return (
        <Container>
            <Row className="">
                <Sidebar></Sidebar>
                <Col className="mt-5" md={{ span: 6, offset: 3 }}>
                    <Form onSubmit={handleSubmit} className="admin-form-design shadow p-5">
                        <Form.Text className="text-muted">
                            Register as an Admin
                            </Form.Text>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onBlur={handleBlur} type="email" name="email" placeholder="Enter email" />

                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control onBlur={handleBlur} type="text" name="name" placeholder="Enter your name" />

                        </Form.Group>

                        <Form.Group>
                            <Form.File onChange={handleFileChange} id="exampleFormControlFile1" label="Example file input" />
                        </Form.Group>

                        <Button variant="warning" type="submit">
                            Submit
                         </Button>
                    </Form>

                </Col>
            </Row>
        </Container>
    );
};

export default AddAdmin;