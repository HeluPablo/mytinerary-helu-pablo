import { React, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function Details() {
  const navigate = useNavigate();
  let id = useParams().id;
  let [cityDetail, setCityDetail] = useState([]);

  useEffect(() => {

    /// Axios hace la petición al back, con el metodo get. Pide como parametro. 
    /// el .then va a realizar la acción cuando reciba la información del back. 
    axios
      .get(`http://localhost:8000/api/cities/${id}`)

        //// setCityDetail va a guardar la respuesta del servidor en la variable "cityDetail"

      .then((res) => setCityDetail([res.data.response]));
  }, [id]);  /// cuando cambie el valor de "ID" se ejecuta el useEffect

  return (
    <div className="card-container">
      {console.log(cityDetail)}
      {cityDetail?.map((e) => (
        <>
          <div className="card">
            <div className="card-details">
            <img className="img-card-details" src={e.photo} alt={e.name}/>
              <p className="text-title">{e.name}</p>
              <p className="text-body">Continent: {e.continent}</p>
              <p className="text-body">Population: {e.population}</p>
              
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
