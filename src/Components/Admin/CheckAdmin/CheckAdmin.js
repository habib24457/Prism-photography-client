import React,{useState} from 'react';
import admin from '../../../images/admin.jpg';
import {useHistory} from 'react-router-dom';
import NavigationBar from '../../HomePage/Home/NavigationBar/NavigationBar';
import './CheckAdmin.css';
import {Notify} from '../../Notify/Notify';

const CheckAdmin = () => {
    const [isAdmin,setIsAdmin] = useState(false);
    const email= sessionStorage.getItem('email');
    const history = useHistory();
    
    
    const validateAdmin=()=>{
        console.log(email)
      fetch(`http://localhost:5000/checkAdmin/${email}`)
      .then(res => res.json())
      .then(data => {
          if (data) {
              history.replace('/admin');
          } else {
              console.log(data);
              setIsAdmin(true);
          }
      });
    }

    const superAdmin =()=>{
        const superEmail = document.getElementById('super-email').value;
        console.log(superEmail);
        if (superEmail.length > 0 && superEmail === 'habiburehman390@gmail.com') {
            history.replace('/admin');
        } else {
            Notify(5);
        }
    }

    return (
        <div className="container">
            <NavigationBar></NavigationBar>
            <div className="row mt-5 pt-5 check-admin-design">
                <div className="col-md-6  mt-5 pt-5">
                {
                        isAdmin ? <div>
                            <h5 className="text-danger">You are not an admin. But you can still check out admin panel
                                by using the super admin email- <span className="text-success">habiburehman390@gmail.com</span> </h5>
                            <input type="text" id="super-email" className="form-control" placeholder="copy and paste the email here and press OK" required />
                            <button onClick={() => { superAdmin() }} className="check-button">OK</button>
                        </div>
                            : <div>
                                <h3 className="text-success">In admin Panel You can do</h3>
                                <ul>
                                    <li>CRUD Operation(Add Product,Update Product,Delete Product)</li>
                                    <li>Add new admin</li>
                                    <li>Check ordered products</li>
                                    <li>Check appointments</li>
                                    <li>Check reviews</li>
                                </ul>
                                <button onClick={() => { validateAdmin() }} className="check-button">Continue</button>
                            </div>
                    }
                </div>
                <div className="col-md-6">
                    <img src={admin} style={{ width:'550px',height:'550px'}} alt=""/>
                </div>
            </div>           
        </div>
    );
};

export default CheckAdmin;