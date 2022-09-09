import {React, useState, useEffect } from 'react';
import {Routes, Route, useNavigate, useParams} from "react-router-dom";

import { People } from "./People";
import { Planets } from "./Planets"
import { Starships } from "./Starships";
import { Species } from "./Species"
import { Vehicles } from "./Vehicles"
import { NotFound } from "./NotFound"
import { Films } from "./Films" 
import { SearchBar } from "./SearchBar"

import { getData } from "../services/StarWarsAPIService"

export const Wrapper = (props) => {
    const { topic, id } = useParams();
    console.log(useParams());
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

    // if (data === null) {
    //     return "not found"
    // }
    
    
    
    return (
        <div>
            <SearchBar></SearchBar>
            {/* <Routes>
                <Route path="people/:id" element={ <People peopleData={data}/> }></Route>
                <Route path="starships/:id" element={ <Starships starshipData={data}/> }></Route>
                <Route path="vehicles/:id" element={ <Vehicles vehicleData={data}/> }></Route>
                <Route path="films/:id" element={ <Films filmData={data}/> }></Route>
                <Route path="species/:id" element={ <Species speciesData={data}/> }></Route>
                <Route path="planets/:id" element={ <Planets planetData={data}/> }></Route> 
            </Routes> */}
        </div>
    )
}

export default Wrapper;