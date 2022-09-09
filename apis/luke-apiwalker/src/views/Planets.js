import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { getData } from "../services/StarWarsAPIService"

export const Planets = (props) => {
    // const [data, setData] = useState(null);
    // const { id } = useParams();

    // useEffect(() => {
    //     getData("planets", id)
    //     .then((data) => {
    //         setData(data)
    //     }).catch((error) => {
    //         console.log(error);
    //     }).finally(() => {
    //         console.log("done");
    //     })
    // }, [id])

    // if (data === null) {
    //     return "not found"
    // }

    // const {name, rotation_period, diameter, climate, gravity, population} = data;
    const {name, rotation_period, diameter, climate, gravity, population} = props;

    return (
        <div>
            <h3>Name: {name}</h3>
            <h3>Rotation period: {rotation_period}</h3>
            <h3>Diameter: {diameter}</h3>
            <h3>Climate: {climate}</h3>
            <h3>Gravity: {gravity}</h3>
            <h3>Population: {population}</h3>

        </div>
    )
}

export default Planets;