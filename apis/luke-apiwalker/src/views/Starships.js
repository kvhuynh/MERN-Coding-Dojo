import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { getData } from "../services/StarWarsAPIService"

export const Starships = (props) => {
    const [data, setData] = useState(null);
    // console.log("props" + props);
    // console.log("useParams" + topic);
    // console.log("id" + id);

    const { id } = useParams();

    useEffect(() => {
        getData("starships", id)
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

    const {name, model, manufacturer, cost_in_credits, length, max_atmosphering_speed} = data;

    // console.log(name);



    return (
        <div>
            <h3>Name: {name}</h3>
            <h3>Height: {model}</h3>
            <h3>manufacturer: {manufacturer}</h3>
            <h3>Cost: {cost_in_credits}</h3>
            <h3>Length: {length}</h3>
            <h3>Max Atmosphering speed: {max_atmosphering_speed}</h3>

        </div>
    )
}

export default Starships;