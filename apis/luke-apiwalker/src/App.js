import './App.css';

import {React, useState, useEffect } from 'react';
import {Routes, Route, Link, useNavigate} from "react-router-dom";



import { People } from "./views/People";
import { Planets } from "./views/Planets"
import { Starships } from "./views/Starships";
import { Species } from "./views/Species"
import { Vehicles } from "./views/Vehicles"
import { NotFound } from "./views/NotFound"
import { Films } from "./views/Films" 
    
function App() {

  const [currentData, setCurrentData] = useState([]);
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    // setCurrentData([...currentData, e.target[0].value, e.target[1].value])
    navigate(e.target[0].value + "/" + e.target[1].value)
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="search-bar">
          <div>
            <label htmlFor="dropDown">Select:</label>
            <select name="dropDown" id="dropDown">
              <option value="people">People</option>
              <option value="starships">Starships</option>
              <option value="vehicles">vehicles</option>
              <option value="films">Films</option>
              <option value="species">Species</option>
              <option value="planets">Planets</option>
            </select>
          </div>
          <div>
            <label htmlFor="">ID: </label>
            <input type="number" />
          </div>
          <button>Search</button>
        </div>
      </form>

      <Routes>
        <Route path="people/:id" element={ <People/> }></Route>
        <Route path="starships/:id" element={ <Starships /> }></Route>
        <Route path="vehicles/:id" element={ <Vehicles /> }></Route>
        <Route path="films/:id" element={ <Films /> }></Route>
        <Route path="species/:id" element={ <Species /> }></Route>
        <Route path="planets/:id" element={ <Planets /> }></Route> 
      </Routes>

    </div>
  );
}
    
export default App
