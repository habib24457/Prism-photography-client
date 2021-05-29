import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome,faPlus,faCalendarCheck,faBook} from '@fortawesome/free-solid-svg-icons';

export const SidebarData =[
    {
        title: 'Home',
        icon: <FontAwesomeIcon icon={faHome}/>,
        link: '/home',
    },
    {
        title: 'Client orders',
        icon: <FontAwesomeIcon icon={faCalendarCheck}/>,
        link: '/admin',
    },
    {
        title: 'Add admin',
        icon: <FontAwesomeIcon icon={faPlus}/>,
        link: '/add',
    },
    {
        title: 'Check reviews',
        icon: <FontAwesomeIcon icon={faBook}/>,
        link: '/check',
    }
]