import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { getData } from "../services/StarWarsAPIService"

export const Films = (props) => {
    // const [data, setData] = useState(null);
    // const { id } = useParams();

    // useEffect(() => {
    //     getData("films", id)
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

    // const  {title, episode_id, opening_crawl, release_date } = data;
    const  {title, episode_id, opening_crawl, release_date } = props;


    return (
        <div>
            <h3>title: {title}</h3>
            <h3>Episode number: {episode_id}</h3>
            <h3>Opening Crawl: {opening_crawl}</h3>
            <h3>release_data: {release_date}</h3>
        </div>
    )
}

export default Films;