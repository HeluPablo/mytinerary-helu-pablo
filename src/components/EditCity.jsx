import React , { useState , useEffect } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

export default function EditCity(props) {
    let { setOpen } = props
 let [city , setCity] = useState()


useEffect(() => {
    axios
    .get(`http://localhost:8000/api/cities`) /// Petición editar ciudad
    .then((res) => {
      console.log(res); setCity(res.data.response)
    }).catch((err)=> toast(err.response.data.message));

}, [])


  return (

<>
    <div>
        Hola
        <button onClick={() => setOpen(true)}> Edit </button>
        <ToastContainer />        
    </div>
</>
  )
}
