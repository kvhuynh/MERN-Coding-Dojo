import { useState } from "react";

export const UserForm = (props) => {
    const [colorList, setColorList] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        setColorList(e.target.value);
    }

    return(
        <div className="container">
            <h1>Color</h1>
            <form onSubmit={ handleSubmit }>
                <input type="text" name="color" value={ color }onChange={ handleChange }/>
                <button type="submit">Add</button>
            </form>


            <main className="flex-row flex-wrap">
                {colorList.map((color, i) => {
                    return(
                        <section className="box" style={{backgroundColor: color[i]}}></section>
                    )
                })}
            </main>
        </div>


    )
}


export default UserForm;