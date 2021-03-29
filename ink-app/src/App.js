import Navbar from "./components/Navbar"
import './App.css';
import axios from "axios"
import { baseURL, config } from "./services/index"
import { useState, useEffect } from "react"
import { Route } from "react-router-dom"
import Tattoo from "./components/Tattoo"
import Form from "./components/Form"
import Details from "./components/Details"



function App() {
  const [tattoos, setTattoos] = useState([])
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    getData();
  },[toggle])

//Grabbing Data from API and storing in Response Variable
  async function getData() {
    let response = await axios.get(baseURL, config);
    setTattoos(response.data.records)
    // console.log(response.data.records)
}



  return (
    <div className="App">
      <Navbar></Navbar>
      <Route exact path="/">
          <div className="tattoo-grid">
        {tattoos.map((tattoo) => {
          return (
            <Tattoo
              tattoo={tattoo}>
            </Tattoo>)
        })}</div>
        </Route>
      <Route path ="/new">
        <Form tattoos={tattoos} setToggle={setToggle}/>
      </Route>
      <Route path="/Details/:id">
        <Details
          tattoos={tattoos} setToggle={setToggle}/>
      </Route>
    </div>
  );
}

export default App;

