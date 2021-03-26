import React from 'react'
import {Link,Route} from "react-router-dom"
import Tattoo from './Tattoo'
import { baseURL, config } from "../services"
import {useState} from "react"




export default function Form(props) {
  let [tattoo, setTattoo] = useState({
    title: "",
    image: "",
    story:"",
  })
  //axios call to Put Data
  
  
  return (
    <Link to ="/new">
      
    <div>
      <form>
        
        <label>
          <input
          type="text">
          </input>
        </label>
        
        <label>
          <input
          type="text">
          </input>
        </label>  
        
        <label>
          <textarea rows="25" cols="100" type="text">

          </textarea>
        </label>
        
       
      </form>
      
    </div>
    </Link>
  )
}
