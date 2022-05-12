import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import './Login.css';
import loginBack from '../../images/loginBack.jpg';
import firebase from 'firebase';
import 'firebase/auth';
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../App";

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const Login = () => {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/home" } };

    const [loggedinUser, setLoggedinUser] = useContext(UserContext);

    console.log(loggedinUser);

    // const setUserToken= () => {
    //     firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
    //         sessionStorage.setItem('token',idToken);
    //       }).catch(function(error) {
    //         // Handle error
    //       });
    // }

    const checkAdmin=(adminMail) => {
        console.log("Blah",adminMail);
    }



    const handleGoogleSignin = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                console.log(result.user);
                const { displayName, email,photoURL } = result.user;
                const signedInUser = { name: displayName, email,photo:photoURL };
                sessionStorage.setItem('email', signedInUser.email);
                setLoggedinUser(signedInUser);
                //setUserToken();
                checkAdmin(email);
                history.replace(from);

            }).catch((error) => {
                console.log(error);
            });

    }




    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <img src={loginBack} style={{ width: '550px', height: '550px' }} alt="" />
                </Col>
            </Row>
            <Row className="login-row">
                <Col md={{ span: 6, offset: 3 }}>

                    <Button onClick={handleGoogleSignin} variant="warning" type="submit" size="lg" block className="d-flex justify-content-center">
                        <FontAwesomeIcon icon={faGoogle} size="2x" />
                        <h4 className="txt-design">Login With Google</h4>
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;