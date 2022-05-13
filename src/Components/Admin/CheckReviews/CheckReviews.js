import React,{ useState,useEffect} from 'react';
import './CheckReviews.css';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import {APILink} from "../../../API_URL/API_URL";

const CheckReviews = () => {
const [reviews,setReviews] = useState([]);

useEffect(()=>{
    loadReview();
},[]);

const loadReview =()=>{
    fetch(APILink+'/reviews')
            .then(response=> response.json()).then(data =>setReviews(data))
    };

const handleReviewRemove=(id)=>{
fetch(`${APILink}/removeReview/${id}`,{
    method:'DELETE'
})
.then(result=>{
   console.log(result);
   loadReview();
})
};




console.log(reviews)
    return (
        <div className="admin row">
            <div className="col-md-4">
                <AdminSidebar></AdminSidebar>
            </div>

            <div className="col-md-6 mt-5">
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Client Name</th>
                            <th scope="col">Review</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map(review => 
                                <tr>
                                    <td>{review.user}</td>
                                    <td>{review.review}</td>
                                    <td>
                                        <button onClick={()=>{handleReviewRemove(review._id)}} className="btn btn-warning">Remove</button>
                                    </td>
                                </tr>
                                
                                )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CheckReviews;