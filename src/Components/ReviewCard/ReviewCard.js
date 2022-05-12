import React from 'react';
import { Card } from 'react-bootstrap';
import './ReviewCard.css';


const ReviewCard = ({ review }) => {
    //console.log(review);
    return (
       <div className="col-md-3">
            <Card className="card-design" style={{ width: '15rem', height: '12rem' }}>
                <Card.Body>
                    <Card.Title className="all-text-color">{review.user}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                    <Card.Text>{review.review}</Card.Text>
                </Card.Body>
            </Card>
        
       </div>
    );
};

export default ReviewCard;