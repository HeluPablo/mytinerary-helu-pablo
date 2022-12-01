import React, { useEffect, useState } from "react";
import "../style/itinerary.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDelItineraryMutation } from "../Redux/reducers/itinerariesAPI";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";


export default function Itinerary(props) {
  let Navigate = useNavigate()
  let { cityId, userId } = props;
  let [change , setChange] = useState("")

  let [itineraries, setItineraries] = useState();
  console.log(itineraries);

  let [Delredux] = useDelItineraryMutation()


  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/itineraries`, {
        /// Petición para  traer los itinerarios
        params: {
          userId: userId,
          cityId: cityId,
        },
      })
      .then((res) => {
        setItineraries(res.data.response);
        console.log(res);
      });
  }, [change]);

  const deleteItinerary = (event) => {
    event.preventDefault();
    console.log(event.target.value);

    let id = event.target.value;

    confirmAlert({
      title: "Delete",
      message: "Delete this Itinerary?.",
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
    <div>
      {itineraries?.map((e) => (
        <div className="page-content-itinerary">
          <div>
            <div className="card">
              <h3>{e.name}</h3>
              <img src={e.photo[0]} alt="" width={350} height={220} />
              <p>{e.description}</p>
              <p>{e.duration} hrs</p>
              <p>${e.price} </p>
              <div>
              <button onClick={(i) => {i.preventDefault(); Navigate(`/editinerary/${e._id}`) }}> Edit </button>
              <button value={e._id} onClick={(i) => deleteItinerary(i)}>
              Delete
            </button>
            </div>
            </div>
          </div>
        </div>
      ))}
      <ToastContainer />
    </div>
  );
}
