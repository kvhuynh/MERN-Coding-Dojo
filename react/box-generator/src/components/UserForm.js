import { useState } from "react";

export const UserForm = (props) => {
    const [colorList, setColorList] = useState([]);
    const [newColor, setNewColor] = useState("");
    const [newSize, setNewSize] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (newColor.length === 0) {
            return;
        }

        setColorList([...colorList, newColor]);
        setNewColor("");

    }

    const handleChange = (e) => {
        setNewColor(e.target.value);
        console.log(e.target.value);
        console.log(colorList);
    }

    return(
        <div className="container">
            <h1>Color</h1>
            <form onSubmit={ (e) => handleSubmit(e) }>
                <input type="text" name="color" value={newColor} onChange={ (e) => handleChange(e) }/>
                <button>Add</button>
            </form>


            <main className="flex flex-wrap">
                {colorList.map((color) => {
                    console.log(color);
                    return(
                        <section className="box" style={{backgroundColor: color}}></section>
                    )
                })}
            </main>
        </div>


    )
}


export default UserForm;