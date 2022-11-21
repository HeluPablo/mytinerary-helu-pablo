import { React, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function Details() {
  const navigate = useNavigate();
  let id = useParams().id;
  let [cityDetail, setCityDetail] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/cities/${id}`)
      .then((res) => setCityDetail([res.data.response]));
  }, [id]);

  return (
    <div className="card-container">
      {console.log(cityDetail)}
      {cityDetail?.map((e) => (
        <>
          <div class="card">
            <div class="card-details">
            <img className="img-card-details" src={e.photo} alt={e.name}/>
              <p class="text-title">{e.name}</p>
              <p class="text-body">Continent: {e.continent}</p>
              <p class="text-body">Population: {e.population}</p>
              
            </div>
            <button className="Submit-button" onClick={() => navigate(-1)}>
              Go back
            </button>
          </div>
        </>
      ))}
    </div>
  );
}
