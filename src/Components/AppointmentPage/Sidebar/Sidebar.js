import React from "react";
import "./styles.css";
import { SidebarData } from "./SidebarData";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const history = useHistory();

  return (
    <div className="admin-sidebar mt-3">
      <ul className="sidebar-list">
        {SidebarData.map((side, key) => {
          return (
            <Link
              to={side.link}
              style={{ textDecoration: "none", color: "white" }}
            >
              <li className="d-flex p-2 a" key={key}>
                <div className="mr-2">{side.icon}</div>
                <div>{side.title}</div>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
