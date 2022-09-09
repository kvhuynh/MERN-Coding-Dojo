import {Routes, Route, useNavigate} from "react-router-dom";
import { useState } from "react";

export const SearchBar = (props) => {

    const [topic, setTopic] = useState("");
    const [id, setId] = useState("");

    let navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        setTopic(e.target[0].value);
        setId(e.target[1].value);
        navigate(e.target[0].value + "/" + e.target[1].value)  
    }

    const getTopicAndId = () => {
        return [topic, id]
    }
  
    return (
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
    )
}

export default SearchBar;