import React, { useState } from "react";
import "./AppointmentModal.css";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { Notify } from "../../Notify/Notify";
import { API_URL } from "../../Constants/Constant";
import { Spinner } from "react-spinner-animated";
import "react-spinner-animated/dist/index.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

const AppointmentModal = ({
  modalIsOpen,
  closeModal,
  appointService,
  date,
  price,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //console.log(appointService)

  const [stillLoading, setStillLoading] = useState(false);

  const onSubmit = async (data) => {
    data.service = appointService;
    data.date = date;
    data.price = price;
    data.created = new Date();
    console.log(data);
    await fetch(API_URL + "/addAppointment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((success) => {
        setStillLoading(true);
        if (success) {
          Notify(6);
          closeModal();
          setStillLoading(false);
          // alert('Appointment successful');
        } else {
          Notify(7);
        }
      })
      .catch((err) => {
        Notify(7);
        console.log(err);
      });
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <h4 className="all-text-color">{appointService}</h4>
          <h4>
            {" "}
            <span className="all-text-color">Selected Date: </span>{" "}
            <small>{date}</small>{" "}
          </h4>
          <h4>
            {" "}
            <span className="all-text-color">Price:{price}$</span>
          </h4>
        </div>

        <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              type="text"
              ref={register({ required: true })}
              name="name"
              placeholder="Your Name"
              className="form-control"
            />
            {errors.name && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div className="form-group">
            <input
              type="text"
              ref={register({ required: true })}
              name="phone"
              placeholder="Phone Number"
              className="form-control"
            />
            {errors.phone && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div className="form-group">
            <input
              type="text"
              ref={register({ required: true })}
              name="email"
              placeholder="Email"
              className="form-control"
            />
            {errors.email && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div className="form-group row">
            <div className="col-4">
              <select
                className="form-control"
                name="gender"
                ref={register({ required: true })}
              >
                <option disabled={true} value="Not set">
                  Select Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Not set">Other</option>
              </select>
              {errors.gender && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="col-4">
              <input
                ref={register({ required: true })}
                className="form-control"
                name="age"
                placeholder="Your Age"
                type="number"
              />
              {errors.age && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
          </div>

          <div className="form-group text-right">
            {stillLoading ? (
              <Spinner width={"150px"} height={"150px"} />
            ) : (
              <button type="submit" className="brand-button">
                Make an Appointment
              </button>
            )}
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AppointmentModal;
