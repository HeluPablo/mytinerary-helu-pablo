import React from 'react'
import {Link as LinkRoute} from "react-router-dom"


export default function CardCity({photo, name,_id}) {
  return (
    <div>
        <div className='card'>
        <img src={photo} alt="" width={450} height={320}/>
        <p>{name}</p>
       <LinkRoute to={`/city/${_id}`}> <button> See more </button> </LinkRoute>
        </div>
    </div>
  )
}
