import Navbar from "./components/Navbar"
import './App.css';
import axios from "axios"
import { baseURL, config } from "./services/index"
import { useState, useEffect } from "react"
import { Route } from "react-router-dom"
import Tattoo from "./components/Tattoo"



function App() {
  const [tattoos, setTattoos] = useState([]);

  useEffect(() => {
    getData();
  },[])

  
  async function getData() {
    let response = await axios.get(baseURL, config);
    setTattoos(response.data.records)
    console.log(response.data.records)
}



  return (
    <div className="App">
      <Navbar></Navbar>
      <Route exact path="/">
        <div>
        {tattoos.map((tattoo) => {
          return (
            <Tattoo
              tattoo={tattoo}>
            </Tattoo>)
        })}</div>
      </Route>
    </div>
  );
}

export default App;
