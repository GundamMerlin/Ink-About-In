import React from 'react'
import { Link } from "react-router-dom"
import axios from "axios"
import {baseURL,config} from "../services"

export default function Details(props) {
//   let data = props.tattoo.fields;
  
//   //axios delete request
//   async function handleDelete() {
//     let deleteURL = `${baseURL}/${props.tattoo.id}`
//     await axios.delete(deleteURL, config)
//     props.setToggle((prevState)=>!prevState)
// }
  
  return (
   
      <div>
        {/* Display only 1 tattoo + info based on ID */}
        {/* Delete based on ID of current item */}
      <button  type="submit">Delete</button>
      </div>
    
  )
}
