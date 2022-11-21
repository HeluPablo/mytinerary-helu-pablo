import React from 'react'
import {Link as LinkRoute} from "react-router-dom"

export default function Titulo() {
  return (
    <div>
                <LinkRoute to="/cities" > <h1 >TURIST LIFE</h1> </LinkRoute>
        <h2 className='slogan'>Your dreams come true</h2>
        <div className='botonescta'>
          <LinkRoute to="/cities">
        <button className='ctac'>CITIES</button>
        </LinkRoute >
        <LinkRoute to="/hotels">
        <button className='ctac'>HOTELS</button>
        </LinkRoute >
        </div>
    </div>
  )
}