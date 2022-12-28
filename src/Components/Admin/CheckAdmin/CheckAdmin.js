import React, { useState } from "react";
import admin from "../../../images/admin.png";
import { useHistory } from "react-router-dom";
import NavigationBar from "../../HomePage/Home/NavigationBar/NavigationBar";
import "./CheckAdmin.css";
import { Notify } from "../../Notify/Notify";
//import { API_URL } from "../../Constants/Constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faCheckDouble } from "@fortawesome/free-solid-svg-icons";

const CheckAdmin = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  //const email = sessionStorage.getItem("email");
  const history = useHistory();

  //   const validateAdmin = () => {
  //     console.log(email);
  //     fetch(API_URL + `/checkAdmin/${email}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data) {
  //           history.replace("/admin");
  //         } else {
  //           console.log(data);
  //           setIsAdmin(true);
  //         }
  //       })
  //       .catch((err) => console.log(err));
  //   };

  console.log(isAdmin);

  const superAdmin = () => {
    const superEmail = document.getElementById("super-email").value;
    console.log(superEmail);
    if (superEmail.length > 0 && superEmail === "habiburehman390@gmail.com") {
      history.replace("/admin");
    } else {
      Notify(5);
    }
  };

  return (
    <div className="container">
      <NavigationBar></NavigationBar>
      <div className="row mt-5 pt-5 check-admin-design">
        <div className="col-md-6  mt-5 pt-5">
          {isAdmin ? (
            <div className="admin-descrip-wrapper">
              <h5 className="all-text-color">
                You can check out admin panel by using the super admin email-{" "}
                <span className="text-success">habiburehman390@gmail.com</span>{" "}
              </h5>
              <input
                type="text"
                id="super-email"
                className="form-control"
                placeholder="copy and paste the email here and press OK"
                required
              />
              <button
                onClick={() => {
                  superAdmin();
                }}
                className="check-button"
              >
                OK
              </button>
            </div>
          ) : (
            <div className="admin-descrip-wrapper">
              <h3>
                <FontAwesomeIcon
                  style={{ color: "blueviolet" }}
                  icon={faLock}
                />
                <span className="all-text-color">
                  &nbsp; In admin Panel You can do
                </span>
              </h3>
              <ul style={{ listStyle: "none" }}>
                <li>
                  <FontAwesomeIcon
                    style={{ color: "blueviolet" }}
                    icon={faCheckDouble}
                  />
                  CRUD Operation
                </li>
                <li>
                  <FontAwesomeIcon
                    style={{ color: "blueviolet" }}
                    icon={faCheckDouble}
                  />
                  You can check ordered products update or delete them
                </li>
                <li>
                  <FontAwesomeIcon
                    style={{ color: "blueviolet" }}
                    icon={faCheckDouble}
                  />
                  You can check appointments
                </li>
                <li>
                  <FontAwesomeIcon
                    style={{ color: "blueviolet" }}
                    icon={faCheckDouble}
                  />
                  Check reviews and statistics
                </li>
                <li>
                  <FontAwesomeIcon
                    style={{ color: "blueviolet" }}
                    icon={faCheckDouble}
                  />
                  You can download invoices
                </li>
              </ul>
              <button
                onClick={() => {
                  setIsAdmin(true);
                }}
                className="brand-button"
              >
                Continue
              </button>
            </div>
          )}
        </div>
        <div className="col-md-6">
          <img src={admin} style={{ height: "350px", width: "350px" }} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CheckAdmin;
