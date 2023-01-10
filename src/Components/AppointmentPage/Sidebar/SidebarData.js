import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCalendarCheck,
  faBook,
  faToolbox,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";

export const SidebarData = [
  {
    title: "Home",
    icon: <FontAwesomeIcon icon={faHome} />,
    link: "/home",
  },
  {
    title: "Get Appointment",
    icon: <FontAwesomeIcon icon={faCalendarCheck} />,
    link: "/appoint",
  },
  {
    title: "Share photos",
    icon: <FontAwesomeIcon icon={faBook} />,
    link: "/sharePhotos",
  },
  {
    title: "Buy & Sell",
    icon: <FontAwesomeIcon icon={faToolbox} />,
    link: "/buySell",
  },
  {
    title: "Check Profile",
    icon: <FontAwesomeIcon icon={faMoneyBill} />,
    link: "/profile",
  },
];
