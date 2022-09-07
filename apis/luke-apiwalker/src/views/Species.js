import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { getData } from "../services/StarWarsAPIService"

export const Species = (props) => {
    const [data, setData] = useState(null);
    // console.log("props" + props);
    // console.log("useParams" + topic);
    // console.log("id" + id);

    const { id } = useParams();

    useEffect(() => {
        getData("species", id)
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

    const {name, classification, average_height, skin_colors, hair_colors, eye_colors} = data;

    // console.log(name);

    return (
        <div>
            <h3>Name: {name}</h3>
            <h3>Classification: {classification}</h3>
            <h3>Average Height: {average_height}</h3>
            <h3>Skin Color(s): {skin_colors}</h3>
            <h3>Hair Color(s): {hair_colors}</h3>
            <h3>Eye Color(s): {eye_colors}</h3>

        </div>
    )
}

export default Species;