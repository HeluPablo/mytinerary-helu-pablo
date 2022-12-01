import React, { useState, useEffect } from "react";
import CardCity from "../components/CardCity";
import axios from "axios";
import { useDelCityMutation } from "../Redux/reducers/citiesAPI";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useNavigate } from "react-router-dom";

export default function MyCities() {
  let [cities, setCities] = useState();
  let [change , setChange] = useState("")
  let userId = "6375e7b7a417c13e23b73296";
  let navigate = useNavigate();
  let [Delredux] = useDelCityMutation();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/cities`, {
        /// Petición para filtrar y traer las ciudades
        params: {
          userId: userId,
        },
      })
      .then((res) => setCities(res.data.response));
  }, [change]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.value);

    let id = event.target.value;

    confirmAlert({
      title: "Delete",
      message: "Delete this city?.",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            Delredux(id)
              .then((res) => {
                console.log(res);
                setChange(res.data.response._id);
                console.log(res.data.response._id);
                toast(res.data.message);
              })
              .catch((err) => toast(err.response.data.message));
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
    <div className="body">
      <div className="card-cont">
        {cities?.map((city) => (
          <div key={city.name}>
            <CardCity key={city.id} {...city} />
            <button value={city._id} onClick={(e) => handleSubmit(e)}>
              Delete
            </button>
            <button
              value={city._id}
              onClick={() => {
                navigate(`/edit/${city._id}`);
              }}
            >
              Edit
            </button>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
}
