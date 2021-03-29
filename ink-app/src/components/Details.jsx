import React from 'react'
import { Link } from "react-router-dom"
import axios from "axios"
import { baseURL, config } from "../services"
import { useParams,useHistory } from "react-router-dom"
import {useEffect, useState} from "react"




export default function Details(props) {
  const [foundTattoo, setFoundTattoo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  let params = useParams();
  let history = useHistory();
  let data = props.tattoos;

  //axios delete request
  async function handleDelete() {
    let deleteURL = `${baseURL}/${params.id}`
    await axios.delete(deleteURL, config)
    props.setToggle((prevState) => !prevState)
    history.push("/")
    
}
  useEffect(() => {
    handleTest();
  }, [])
  
  function handleTest() {
    let testvar = params.id
    data.map((tattoo) => {
      if (params.id === tattoo.id) {
        setFoundTattoo((prevState) => tattoo)
        setIsLoading(false);
      } else {
        return null;
      }
      
    })

    console.log(props.tattoos)
  }
  
  return (
    isLoading ?
      <div>Loading...</div>:

      <div>
      {/* Display only 1 tattoo + info based on ID */}
        <h2>{foundTattoo.fields.title}</h2>
        <img src={foundTattoo.fields.image}></img>
        <p>{foundTattoo.fields.story}</p>
        {/* Delete based on ID of current item */}
        <button onClick={handleDelete} type="submit">Delete</button>
      </div>
    
  )
}
