import React, { useState, useEffect } from "react";
import CardCity from "../components/CardCity";
import axios from "axios";

export default function MyCities() {
  let [cities, setCities] = useState();
  let userId = "6375e7b7a417c13e23b73296";

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/cities`, {
        /// Petición para filtrar y traer las ciudades
        params: {
          userId: userId,
        },
      })
      .then((res) => setCities(res.data.response));
  }, []);

  return (
    <div className="body">
      <div className="card-cont">
        {cities?.map((city) => (
          <div key={city.name}>
            <CardCity key={city.id} {...city} />
            <button value={city._id} onClick={(e) => console.log(e.target.value)}>Delete</button>
            <button value={city._id} onClick={(e) => console.log(e.target.value)}>Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
}
