import './App.css';

import {React, useState, useEffect } from 'react';
import {Routes, Route, useNavigate, useParams} from "react-router-dom";

import { Wrapper } from "./views/Wrapper"
import { SearchBar } from "./views/SearchBar"
import { People } from "./views/People";
import { Planets } from "./views/Planets"
import { Starships } from "./views/Starships";
import { Species } from "./views/Species"
import { Vehicles } from "./views/Vehicles"
import { NotFound } from "./views/NotFound"
import { Films } from "./views/Films" 

import { getData } from "./services/StarWarsAPIService"

function App() {
  const { topic, id } = useParams();
  const [ data, setData ] = useState(null);
  console.log(topic, id);
  useEffect(() => {
      getData(topic, id)
      .then((data) => {
          setData(data)
      }).catch((error) => {
          console.log(error);
      }).finally(() => {
          console.log("done");
          
      })
  }, [topic, id])

  return (
      <div>
          <SearchBar></SearchBar>
          <Routes>
                <Route exact path="people/:id" element={ <People peopleData={data}/> }></Route>
                <Route path="starships/:id" element={ <Starships starshipData={data}/> }></Route>
                <Route path="vehicles/:id" element={ <Vehicles vehicleData={data}/> }></Route>
                <Route path="films/:id" element={ <Films filmData={data}/> }></Route>
                <Route path="species/:id" element={ <Species speciesData={data}/> }></Route>
                <Route path="planets/:id" element={ <Planets planetData={data}/> }></Route> 
            </Routes>
      </div>


  );
}
    
export default App
