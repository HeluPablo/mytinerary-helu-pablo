import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

export default function NewCity() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = {
      name: event.target[0].value,
      surname: event.target[1].value,
      email: event.target[2].value,
      password: event.target[3].value,
    };
    console.log(userData);

    confirmAlert({
      title: "New city",
      message: "create new city?.",
      buttons: [
        {
          label: "Yes",
          onClick: () => toast("city created succesfully"),
        },
        {
          label: "No",
          onClick: () => console.log("Click No"),
        },
      ],
    });
  };

  return (
    <div className="body-form">
      <ToastContainer />
      <section className="form-cont">
        <h2 className="form-title">Register a new city</h2>
        <form onSubmit={handleSubmit}>
          <div className="">
            <input
              name="id"
              className="input"
              placeholder="ID"
              type="text"
              required
            />
          </div>
          <div className="">
            <input
              name="name"
              className="input"
              placeholder="Name"
              type="text"
            />
          </div>
          <div className="">
            <input
              name="continent"
              className="input"
              placeholder="Continent"
              type="text"
              required
            />
          </div>
          <div className="">
            <input
              name="population"
              className="input"
              placeholder="Population"
              type="text"
            />
          </div>
          <div className="">
            <input
              name="userid"
              className="input"
              placeholder="UserID"
              type="text"
              required
            />
          </div>
          <div className="">
            <button type="submit" className="">
              ADD CITY
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
