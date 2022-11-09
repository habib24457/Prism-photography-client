import React, { useState, useEffect } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import ReviewCard from '../../ReviewCard/ReviewCard';
import ReactLoading from 'react-loading';
import { API_URL } from '../../Constants/Constant';




const Review = () => {
    const [reviews, setReviews] = useState([]);
    const [done, setDone] = useState(false);


    useEffect(() => {
        fetch( API_URL+'/reviews')
            .then(response => response.json())
            .then(data => {
                setReviews(data)
                setDone(true);

            }).catch((err)=>console.log(err));
    }, [])

    console.log(reviews)
    return (
        <Container>
            {
                !done ?
                    <div className="row justify-content-center mt-5 pt-5">
                        <ReactLoading type={"spin"} color={"green"} height={100} width={100} />
                    </div>

                    :
                    <div>
                        <Row className="text-center mt-5 pb-5">
                            <Col>
                                <h1 className="all-text-color">Customer Reviews</h1>
                            </Col>
                        </Row>

                        <Row className="d-flex">
                            {
                                reviews.map(review => <ReviewCard review={review}></ReviewCard>)
                            }
                        </Row>
                    </div>
            }
        </Container>
    );
};

export default Review;