import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome,faPlus,faCalendarCheck,faBook,faToolbox} from '@fortawesome/free-solid-svg-icons';

export const SidebarData =[
    {
        title: 'Home',
        icon: <FontAwesomeIcon icon={faHome}/>,
        link: '/home',
    },
    {
        title: 'Appointments',
        icon: <FontAwesomeIcon icon={faCalendarCheck}/>,
        link: '/admin',
    }, 
    {
        title: 'Client Orders',
        icon: <FontAwesomeIcon icon={faToolbox}/>,
        link: '/clientOrders',
    }, 
    {
        title: 'Add admin',
        icon: <FontAwesomeIcon icon={faPlus}/>,
        link: '/addAdmin',
    },
    {
        title: 'Check reviews',
        icon: <FontAwesomeIcon icon={faBook}/>,
        link: '/checkReview',
    }
]