import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { getData } from "../services/StarWarsAPIService"

export const People = (props) => {
    const [data, setData] = useState(null);
    // console.log("props" + props);
    // console.log("useParams" + topic);
    // console.log("id" + id);

    const { id } = useParams();

    useEffect(() => {
        getData("people", id)
        .then((data) => {
            setData(data)
        }).catch((error) => {
            console.log(error);
        }).finally(() => {
            console.log("done");
            console.log(data);
            
        })
    }, [id])

    if (data === null) {
        return "not found"
    }

    console.log(data);

    const {name, height, mass, hair_color, skin_color, eye_color} = data;

    // console.log(name);

    return (
        <div>
            <h3>Name: {name}</h3>
            <h3>Height: {height}</h3>
            <h3>Mass: {mass}</h3>
            <h3>Hair Color: {hair_color}</h3>
            <h3>Skin Color: {skin_color}</h3>
            <h3>Eye Color: {eye_color}</h3>
        </div>
    )
}

export default People;