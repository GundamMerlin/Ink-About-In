import React from 'react'
import {Link} from "react-router-dom"

export default function Details() {
  // let data = props.tattoo.fields;
  
  
  return (
    <Link to ="/Details/:id">
    <div>
      <button type="submit">Delete</button>
      </div>
    </Link>
  )
}
