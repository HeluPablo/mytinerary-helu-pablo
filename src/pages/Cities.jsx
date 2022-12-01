import React from "react";
import CardCity from "../components/CardCity";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGetAllQuery } from "../Redux/reducers/citiesAPI";

export default function Cities() {
  const [search, setSearch] = useState(""); ///Cambia el valor al estado
  let [checkbox, setCheckBox] = useState();
  let [check, setCheck] = useState([]);

  let { data: redux } = useGetAllQuery({ search, check });

  console.log(redux?.response);
  let cities = redux?.response;

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/cities`) /// Petición de traer los checkbox
      .then((res) => {
        setCheckBox(res.data.response);
      });
   
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
        {cities?.map((city) => (
          <div key={city.name}>
            <CardCity key={city.id} {...city} />
          </div>
        ))}
      </div>
    </div>
  );
}
