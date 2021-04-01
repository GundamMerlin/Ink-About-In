import Navbar from "./components/Navbar"
import './App.css';
import axios from "axios"
import { baseURL, config } from "./services/index"
import { useState, useEffect } from "react"
import { Route } from "react-router-dom"
import Form from "./components/Form"
import Details from "./components/Details"
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import qs from 'qs'



function App() {
  const [tattoos, setTattoos] = useState([])
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    getData();
  },[toggle])


  async function getData() {
    let queryParams = qs.stringify({sort:[{field: "Created" ,direction: 'desc'}]})
    let response = await axios.get(`${baseURL}?${queryParams}`, config,);
    setTattoos(response.data.records)

}



  return (
    <div className="App">
      <Navbar></Navbar>
      <Route exact path="/">
        <Gallery tattoos={tattoos}/>
        </Route>
      <Route path ="/new">
        <Form tattoos={tattoos} setToggle={setToggle}/>
      </Route>
      <Route path="/Details/:id">
        <Details
          tattoos={tattoos} setToggle={setToggle}/>
      </Route>
      <Footer/>
    </div>
    
    
  );
}

export default App;

