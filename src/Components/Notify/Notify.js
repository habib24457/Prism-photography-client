import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

export const Notify = (id) => {
  console.log(id);
  if (id === 1) {
    toast("Thank you for your review!", {
      position: toast.POSITION.TOP_CENTER,
    });
  } else if (id === 2) {
    toast("Payment success!", { position: toast.POSITION.TOP_CENTER });
  } else if (id === 3) {
    toast("Payment failed!", { position: toast.POSITION.TOP_CENTER });
  } else if (id === 4) {
    toast("Admin added successfully!", { position: toast.POSITION.TOP_CENTER });
  } else if (id === 5) {
    toast("You have to enter the correct email address!", {
      position: toast.POSITION.TOP_CENTER,
    });
  } else if (id === 6) {
    toast("Appointment added successfully!", {
      position: toast.POSITION.TOP_CENTER,
    });
  } else if (id === 7) {
    toast.error("Something went wrong! Please try again", {
      position: toast.POSITION.TOP_CENTER,
    });
  }
};
