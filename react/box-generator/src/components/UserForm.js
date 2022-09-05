import { useState } from "react";

export const UserForm = (props) => {
    const [color, setColor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.getNewColor(color);
    }

    const handleChange = (e) => {
        setColor(e.target.value);
    }

    return(
        <div className="container">
            <h1>Color</h1>
            <form onSubmit={ handleSubmit }>
                <input type="text" name="color" value={ color }onChange={ handleChange }/>
                <button type="submit">Add</button>
            </form>
            <p>{color}</p>
        </div>


    )
}


export default UserForm;