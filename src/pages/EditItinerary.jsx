import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function EditItinerary() {
    let [userId, setUserId] = useState();
    let [cityId, setCityId] = useState();
    let [itineraryEdit, setItineraryEdit] = useState([]);
    let id = useParams().id;
    let navigate = useNavigate()
    useEffect(() => {
        axios
          .get(`http://localhost:8000/api/itineraries/${id}`) /// Petición obtener una ciudad
          .then((res) => {
            console.log(res);
            setItineraryEdit([res.data.response]);
            setUserId(res.data.response.userId);
            setCityId(res.data.response.cityId);
          })
          .catch((err) => toast(err.response.data.message));
      }, []);

      const handleSubmit = (event) => {
        event.preventDefault();
    
        const userData = {
          name: event.target[0].value,
          description: event.target[1].value,
          photo: event.target[2].value,
          price: event.target[3].value,
          duration: event.target[4].value,
          userId: userId,
          cityId: cityId,
        };
        console.log(userData);
    
        confirmAlert({
          title: "Itinerary",
          message: "Edit this itinerary?.",
          buttons: [
            {
              label: "Yes",
              onClick: () => {
                axios
                  .put(`http://localhost:8000/api/itineraries/${id}`, userData) /// Petición editar itinerario
                  .then((res) => {
                    console.log(res);
                    toast(res.data.message);
                    setTimeout (() => navigate(`/mytineraries`) , 2000 )                
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
      {console.log(itineraryEdit)}
      {itineraryEdit?.map((e) => (
        <>
          <div className="body-form">
            <section className="form-cont">
              <h2 className="form-title">Edit Itinerary</h2>
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
                    name="description"
                    className="input"
                    type="text"
                    required
                    defaultValue={e.description}
                  />
                </div>
                <div className="">
                  <input
                    name="photo"
                    className="input"
                    type="text"
                    defaultValue={e.photo}
                  />
                </div>
                <div className="">
                  <input
                    name="price"
                    className="input"
                    type="text"
                    defaultValue={e.price}
                  />
                  </div>
                  <div className="">
                  <input
                    name="duration"
                    className="input"
                    type="text"
                    defaultValue={e.duration}
                  />
                </div>
                <div className=""></div>
                <div className="">
                  <button type="submit" className="">
                    EDIT ITINERARY
                  </button>
                </div>
              </form>
              <button onClick={() => navigate(-1)}>GO BACK</button>
            </section>
          </div>
        </>
      ))}
    </div>
    <ToastContainer />
  </>
  )
}
