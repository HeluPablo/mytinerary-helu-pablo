import React from "react";
import CardCity from "../components/CardCity";
import { useState, useEffect } from "react";
import axios from "axios";
import Alerts from "../components/Alerts";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function Cities() {
  // toast("Probando =) ")


  const [search, setSearch] = useState("");  ///Cambia el valor al estado 
  let [ciudades, setCiudades] = useState();
  let [checkbox, setCheckBox] = useState();
  let [check, setCheck] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/cities`) /// Petición de traer los checkbox
      .then((res) => {
        setCheckBox(res.data.response);
      });

    axios
      .get(`http://localhost:8000/api/cities`, {  /// Petición para filtrar y traer las ciudades
        params: {
          continent: check,
          name: search,
        },
      })
      .then((res) => setCiudades(res.data.response));
  }, [check, search]);
  
  const checkBoxArray = Array.from(new Set(checkbox?.map((e) => e.continent)));

  // console.log(checkBoxArray)

  const searcher = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  function onClickCheckBox(e) {
    console.log(e.target.value);
    let checkedCheckBox = [];

    if (e.target.checked) {
      checkedCheckBox = [...check, e.target.value];
    } else {
      checkedCheckBox = check.filter((i) => e.target.value !== i);
    }
    setCheck(checkedCheckBox);
  }

  return (
    <div className="body">
      <ToastContainer />;
      <div className="input-cont">
        <input
          className="inputsearch form-control"
          placeholder="search"
          value={search}
          onChange={searcher}
        />
        <div className="input-cont">
          {checkBoxArray?.map((e) => (
            <div key={e}>
              <label>
                <input
                  type="checkbox"
                  value={e}
                  onClick={onClickCheckBox}
                ></input>
                {e}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="card-cont">
        {ciudades?.map((city) => (
          <div key={city.name}>
            <CardCity key={city.id} {...city} />
          </div>
        ))}      
      </div>
    </div>
  );
}
