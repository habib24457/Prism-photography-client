import React from 'react';
import './AdminSidebar.css';
import { SidebarData } from './SidebarData';
import {Link,useHistory} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons';




const AdminSidebar = () => {
const history = useHistory();
    const handleSignOut=() => {
        sessionStorage.removeItem('email');
        history.replace('/home');
    }
    return (
        <div className="admin-sidebar">
            <ul className="sidebar-list">
                {
                    SidebarData.map((side, key) => {
                        return (
                            
                            <Link to={side.link} style={{ textDecoration: 'none',color:'white' }}>
                            <li className="d-flex p-2 a" key={key}>
                                <div className="mr-2">{side.icon}</div>
                                <div>{side.title}</div>
                            </li>
                            </Link>                         
                        )
                    })
                }
            </ul>
            <button onClick={handleSignOut}>
                <FontAwesomeIcon icon={faSignOutAlt}/>
                Logout
            </button>
        </div>
    );
};

export default AdminSidebar;