import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import caro1 from '../../../images/caro1.jpg';
import caro2 from '../../../images/caro2.jpg';
import caro3 from '../../../images/caro3.jpg';
const ImageGallery = () => {
    return (
        <Container>


            <div className="d-flex justify-content-center">
                <div className="row w-75  mt-5 pb-5">
                    <div className="col-md-12 text-center">
                        <h1>Awesome Photography</h1>

                        <Carousel>
                            <Carousel.Item>
                                <img
                                    style={{ height: '450px', width: '450px' }}
                                    className="d-block w-100"
                                    src={caro1}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    style={{ height: '450px', width: '450px' }}
                                    className="d-block w-100"
                                    src={caro2}
                                    alt="Second slide"
                                />

                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    style={{ height: '450px', width: '450px' }}
                                    className="d-block w-100"
                                    src={caro3}
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>



                    </div>
                </div>
            </div>



        </Container>
    );
};

export default ImageGallery;