import React from 'react'
import Details from "./Details"
import {Link} from "react-router-dom"

export default function Tattoo(props) {
  let data = props.tattoo.fields;
  
  return (
    <Link to={`/Details/${props.tattoo.id}`}>
      <div id="tattoo">
        <img src={data.image}></img>
        <h3>Click for more info</h3>
      </div>
    </Link>
  )
}
