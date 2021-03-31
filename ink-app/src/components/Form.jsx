import React from 'react'
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
  
  async function handleSubmit(e) {
    e.preventDefault();
    await axios.post(baseURL, { fields: tattoo }, config)
    props.setToggle((prevState) => !prevState)
    history.push("/");
  }
  
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            required
          value={tattoo.title}
          onChange={handleChange}>
        </input>
        <br></br>
        <label htmlFor="image">Upload Image URL</label>  
          <input
          type="text"
          name="image"
          required
          value={tattoo.image}
          onChange={handleChange}>
        </input>
        <br></br>
        <label htmlFor="story"></label>
        <textarea
          rows="25"
          cols="100"
          type="text"
          name="story"
          placeholder="Tell us your story"
          required
          value={tattoo.story}
          onChange={handleChange}>
        </textarea>
        <br></br>
       <input className ="submit-button" type="submit"/>
      </form>
  </div>
  )
}
