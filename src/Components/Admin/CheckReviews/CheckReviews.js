import React,{ useState,useEffect} from 'react';
import './CheckReviews.css';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const CheckReviews = () => {
const [reviews,setReviews] = useState([]);

const handleReviewRemove=(id)=>{
fetch(`http://localhost:5000/removeReview/${id}`,{
    method:'DELETE'
})
.then (response => response.json())
.then(result=>{
    console.log(result);
    //window.location.reload();
})
}

useEffect(() => {
    fetch('http://localhost:5000/reviews')
    .then(response=> response.json())
    .then(data =>setReviews(data))
},[])

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