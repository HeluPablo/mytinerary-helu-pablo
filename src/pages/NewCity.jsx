import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function NewCity() {
  let navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = {
      name: event.target[0].value,
      continent: event.target[1].value,
      photo: event.target[2].value,
      population: event.target[3].value,
      userId: "6375e7b7a417c13e23b73296"
    };
    console.log(userData);

    confirmAlert({
      title: "New city",
      message: "create new city?.",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            axios
              .post(`http://localhost:8000/api/cities` , userData) /// Petición crear ciudad
              .then((res) => {
                console.log(res); toast(res.data.message) ; navigate(`/city/${res.data.response._id}`)
              }).catch((err)=> toast(err.response.data.message));
          },
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
              name="photo"
              className="input"
              placeholder="Photo"
              type="text"
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
