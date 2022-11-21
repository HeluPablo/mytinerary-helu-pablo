import React from 'react'
import Titulo from './Titulo.jsx'
import {Link as LinkRoute} from "react-router-dom"

export default function Home1() {
  return (
    <div>
      <Titulo/>
      <div>
       <LinkRoute to="../pages/Cities">       
        </LinkRoute>
        </div>
    </div>
  )
}