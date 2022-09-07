import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { getData } from "../services/StarWarsAPIService"

export const Vehicles = (props) => {
    const [data, setData] = useState(null);
    const [errorState, setErrorState] = useState(false)
    // console.log("props" + props);
    // console.log("useParams" + topic);
    // console.log("id" + id);

    const { id } = useParams();

    useEffect(() => {
        getData("vehicles", id)
        .then((data) => {
            setData(data)
        }).catch((error) => {
            console.log(error);
        }).finally(() => {
            console.log("done");
        })
    }, [id])

    if (data === null) {
        return "not found"
    }

    const {name, model, manufacturer, cost_in_credits, cargo_capacity, pilots} = data;


    return (
        <div>
            
            <h3>Name: {name}</h3>
            <h3>Model: {model}</h3>
            <h3>Manufacturer: {manufacturer}</h3>
            <h3>Cost in credits: {cost_in_credits}</h3>
            <h3>Cargo capacity: {cargo_capacity}</h3>
            <h3>Pilots: {pilots}</h3>
        </div>
    )
}

export default Vehicles;