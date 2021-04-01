import React from 'react'
import axios from "axios"
import { baseURL, config } from "../services"
import { useParams,useHistory } from "react-router-dom"
import {useEffect, useState} from "react"

export default function Details(props) {
  const [foundTattoo, setFoundTattoo] = useState({});
  let params = useParams();
  let history = useHistory();
  

  async function handleDelete() {
    let deleteURL = `${baseURL}/${params.id}`
    await axios.delete(deleteURL, config)
    props.setToggle((prevState) => !prevState)
    history.push("/")
    
}
  useEffect(() => {
    handleFind();
  }, [])
  
 async function handleFind() {
   const response = await axios.get(`${baseURL}/${params.id}`, config)
    setFoundTattoo(response.data)
  }
  
  return (
      !foundTattoo.fields ?
      <div>Loading...</div>:
        foundTattoo ?
          <div className="tattoo-details">
            <h2>{foundTattoo.fields.title}</h2>
            <img src={foundTattoo.fields.image} alt={foundTattoo.fields.title}></img>
            <p>{foundTattoo.fields.story}</p>
            <button onClick={handleDelete} type="submit">Delete</button>
          </div>:
        
            <div>null</div>
    
  )
}
