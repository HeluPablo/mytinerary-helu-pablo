import React from 'react'
import CardCity from '../components/CardCity'
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function Cities() {
  const [search, setSearch] = useState("")
  let [ciudades , setCiudades] = useState()
  let [checkbox , setCheckBox] = useState()
  
  
  useEffect(() => {
    axios.get(`http://localhost:8000/api/cities`)
    .then((res) => setCheckBox(res.data.response));
    
    axios.get(`http://localhost:8000/api/cities`)
    .then((res) => setCiudades(res.data.response));
    
  }, [])

  const searcher = (e) => {
    setSearch(e.target.value)
    console.log(search)
  }

function checked(e){
  console.log(e.target.value)
}





  return (
    <div className='body'>
      <div className='input-cont'>
        <input
          className="inputsearch form-control"
          placeholder="search"
          value={search}
          onChange={searcher}
        />
        <div className="topping">

          {checkbox?.map((e) => (
            <>
            <label className="Checkbox-labels" for={e.name}>{e.continent}</label>
            <input type="checkbox" value={e.name} onClick={checked} ></input>            
            </>            
          ))}

        </div>
      </div>
      <div className='card-cont'>
        {ciudades?.map(ciudad => <CardCity key={ciudad.id}{...ciudad}/>)} 
      </div>
    </div>
  )
}
