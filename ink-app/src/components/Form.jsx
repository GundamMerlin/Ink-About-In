import React from 'react'
import {Link,Route} from "react-router-dom"
import Tattoo from './Tattoo'
import { baseURL, config } from "../services"
import {useState} from "react"
import axios from 'axios'
import {useHistory} from "react-router-dom"



export default function Form(props) {
  let [tattoo, setTattoo] = useState({
    title: "",
    image: "",
    story: "",
  });
  const history = useHistory();

  function handleChange(e) {
    let { name, value } = e.target;
    setTattoo((prevState) => ({ ...prevState, [name]: value}));
  }
  
  //axios call to POST Data
  async function handleSubmit(e) {
    e.preventDefault();
    await axios.post(baseURL,{fields: tattoo},config)
    history.push("/");
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        
        <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            required
          value={tattoo.title}
          onChange={handleChange}
          >
          </input>
        <label htmlFor="image">Upload Image URL</label>  
          <input
          type="text"
          name="image"
          required
          value={tattoo.image}
          onChange={handleChange}
          >
          </input>
        
        <label htmlFor="story"></label>
        <textarea
          rows="25"
          cols="100"
          type="text"
          name="story"
          placeholder="Tell us your story"
          required
          value={tattoo.story}
          onChange={handleChange}
        >
          </textarea>
        
        
       <input type="submit"/>
      </form>
  </div>
    
  )
}
