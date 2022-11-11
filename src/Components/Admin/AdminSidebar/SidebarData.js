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
    title: "Appointments",
    icon: <FontAwesomeIcon icon={faCalendarCheck} />,
    link: "/admin",
  },
  {
    title: "Statistics",
    icon: <FontAwesomeIcon icon={faToolbox} />,
    link: "/statistics",
  },

  {
    title: "Check reviews",
    icon: <FontAwesomeIcon icon={faBook} />,
    link: "/checkReview",
  },
  {
    title: "Check Payments",
    icon: <FontAwesomeIcon icon={faMoneyBill} />,
    link: "/checkPayment",
  },
];
