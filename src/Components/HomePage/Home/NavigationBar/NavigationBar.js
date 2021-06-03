import React from 'react';
import {Row,Col,Navbar,Nav,Container,Button} from 'react-bootstrap';
import {Link,useHistory} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro,faUsersCog,faShoppingCart,faPhone} from '@fortawesome/free-solid-svg-icons'

const NavigationBar = () => {
    const email = sessionStorage.getItem('email');
    const history = useHistory();
    const handlesignOut=()=>{
        sessionStorage.removeItem('email');
        history.replace('/home');
    }

    return (
        <Container>
              <Row>
                <Col>
                    <Navbar collapseOnSelect expand="lg" style={{backgroundColor:' #378369'}} fixed="top">
                        <Navbar.Brand href="/home">
                        <FontAwesomeIcon  style={{color:'#ffffff'}} icon={faCameraRetro}/>
                            <span  style={{color:'#ffffff',padding:'10px',textAlign:'center'}}>
                            Prism Photography</span>
                            </Navbar.Brand>

                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                            <Nav>
                                <Nav.Link href="/checkAdmin"> 
                                <FontAwesomeIcon  style={{color:'#ffffff'}} icon={faUsersCog}/>
                                <span  style={{color:'#ffffff',padding:'10px'}}>Admin</span> 
                                </Nav.Link>
                                <Nav.Link href="/dashboard">
                                    <FontAwesomeIcon style={{color:'#ffffff'}}  icon={faShoppingCart}/>
                                    <span  style={{color:'#ffffff',padding:'10px'}}>Basket</span>
                                </Nav.Link>
                                <Nav.Link href="/contact">
                                <FontAwesomeIcon style={{color:'#ffffff'}}  icon={faPhone}/>
                                    <span  style={{color:'#ffffff',padding:'10px'}}>Contact</span>
                                    </Nav.Link>
                                    {
                                        email?<Button onClick={handlesignOut} variant="warning">Logout</Button>:
                                         <Link to="/login">
                                        <Button variant="warning">Login</Button>
                                    </Link>
                                    }
                               
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    );
};

export default NavigationBar;