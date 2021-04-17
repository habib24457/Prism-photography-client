import React from 'react';
import {Card,Col} from 'react-bootstrap';

const ReviewCard = ({review}) => {
    //console.log(review);
    return (
        <div>
            <Col className="pb-2 text-center">
                    <Card style={{ width: '25rem',height:'12rem' }}>
                        <Card.Body>
                            <Card.Title>{review.user}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                            <Card.Text>{review.review}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
        </div>
    );
};

export default ReviewCard;