import React, { useState, useEffect } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import ReviewCard from '../../ReviewCard/ReviewCard';

const Review = () => {
    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch('https://infinite-castle-13224.herokuapp.com/reviews')
            .then(response => response.json())
            .then(data => setReviews(data));
    }, [])


    return (
        <Container>
            <Row className="text-center mt-5 pb-5">
                <Col>
                    <h1 className="all-text-color">Customer Reviews</h1>
                </Col>
            </Row>
            <Row className="d-flex justify-content-center">
                {
                    reviews.map(review => <ReviewCard review={review}></ReviewCard>)
                }
            </Row>
        </Container>
    );
};

export default Review;