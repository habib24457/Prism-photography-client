import React, { useState } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { Notify } from "../../Notify/Notify";
import { API_URL } from "../../Constants/Constant";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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

const EditAppointmentModal = ({
  setIsEdited,
  modalIsOpen,
  closeModal,
  inputData,
  setInputData,
  setIsModalOpen,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [startDate, setStartDate] = useState(new Date());
  //const [selectedAppointment,setSelectedAppointment] =useState({inputData});

  const onSubmit = (data) => {
    console.log(startDate, setStartDate);

    setIsModalOpen(false);
    const id = inputData._id;

    console.log(id);
    console.log(inputData);

    fetch(API_URL + `/updateAppointment/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputData),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        setIsEdited(true);
        Notify(6);
      })
      .catch((err) => console.log(err));
  };

  const handleInputChange = (e) => {
    //console.log(e.target.name);
    //console.log(e.target.value);
    const newAppointment = { ...inputData };
    newAppointment[e.target.name] = e.target.value;
    setInputData(newAppointment);
    //console.log(newAppointment);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
          {/* <h4 className="all-text-color">{appointService}</h4>
                    <h4> <span className="all-text-color">Selected Date: </span>  <small>{date}</small> </h4>
                    <h4> <span className="all-text-color">Price:{price}$</span></h4> */}
        </div>

        <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              value={inputData?.price}
              onChange={(e) => handleInputChange(e)}
              type="text"
              ref={register({ required: true })}
              name="price"
              placeholder="Price"
              className="form-control"
            />
            {errors.name && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div className="form-group">
            <input
              value={inputData?.phone}
              onChange={(e) => handleInputChange(e)}
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
              value={inputData?.email}
              onChange={(e) => handleInputChange(e)}
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
            {/* <div className="col-4">
                            <select className="form-control" name="gender" ref={register({ required: true })} >
                                <option disabled={true} value="Not set">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Not set">Other</option>
                            </select>
                            {errors.gender && <span className="text-danger">This field is required</span>}

                        </div> */}
            {/* <div className="col-4">
                            <input ref={register({ required: true })} className="form-control" name="age" placeholder="Your Age" type="number" />
                            {errors.age && <span className="text-danger">This field is required</span>}
                        </div> */}

            <div className="col-4 mb-5">
              <DatePicker
                selected={startDate}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
          </div>

          <div className="form-group text-right mt-5">
            <button
              onClick={() => handleCloseModal()}
              className="brand-button mr-5"
            >
              Close
            </button>
            <button type="submit" className="brand-button ml-5">
              Save Edited Appointment
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default EditAppointmentModal;
