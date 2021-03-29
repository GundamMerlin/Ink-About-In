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
  const [tattoos, setTattoos] = useState([]);

  useEffect(() => {
    getData();
  },[])

//Grabbing Data from API and storing in Response Variable
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
      <Route path ="/new">
        <Form tattoos={tattoos}/>
      </Route>
      <Route path="/Details">
        <Details/>
      </Route>
    </div>
  );
}

export default App;

// Using find method ?
// {tattoos.find((tattoo) => {
//   return (<Details
//   key = {tattoo.id}
//   />)
// })}