import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function EditCity() {
  let [cityEdit, setCityEdit] = useState([]);
  let [userId, setUserId] = useState();
  let id = useParams().id;
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/cities/${id}`) /// Petición obtener una ciudad
      .then((res) => {
        console.log(res);
        setCityEdit([res.data.response]);
        setUserId(res.data.response.userId._id);
      })
      .catch((err) => toast(err.response.data.message));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = {
      name: event.target[0].value,
      continent: event.target[1].value,
      photo: event.target[2].value,
      population: event.target[3].value,
      userId: userId,
    };
    console.log(userData);

    confirmAlert({
      title: "Edit city",
      message: "Edit this city?.",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            axios
              .put(`http://localhost:8000/api/cities/${id}`, userData) /// Petición editar ciudad
              .then((res) => {
                console.log(res);
                toast(res.data.message);
                navigate(`/mycities`);
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
    <>
      <div className="card-container">
        {console.log(cityEdit)}
        {cityEdit?.map((e) => (
          <>
            <div className="body-form">
              <section className="form-cont">
                <h2 className="form-title">Edit city</h2>
                <img className="img-card-details" src={e.photo} alt={e.name} />
                <form onSubmit={handleSubmit}>
                  <div className=""></div>
                  <div className="">
                    <input
                      name="name"
                      className="input"
                      placeholder="Name"
                      type="text"
                      defaultValue={e.name}
                    />
                  </div>
                  <div className="">
                    <input
                      name="continent"
                      className="input"
                      placeholder="Continent"
                      type="text"
                      required
                      defaultValue={e.continent}
                    />
                  </div>
                  <div className="">
                    <input
                      name="photo"
                      className="input"
                      placeholder="Photo"
                      type="text"
                      defaultValue={e.photo}
                    />
                  </div>
                  <div className="">
                    <input
                      name="population"
                      className="input"
                      placeholder="Population"
                      type="text"
                      defaultValue={e.population}
                    />
                  </div>
                  <div className=""></div>
                  <div className="">
                    <button type="submit" className="">
                      EDIT CITY
                    </button>
                  </div>
                </form>
                <button onClick={() => navigate(-1)}>Go back</button>
              </section>
            </div>
          </>
        ))}
      </div>
      <ToastContainer />
    </>
  );
}
