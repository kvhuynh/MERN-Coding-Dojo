import { useState } from "react";

export const UserForm = (props) => {
    const [colorList, setColorList] = useState([]);
    const [newColor, setNewColor] = useState("");
    const [height, setHeight] = useState("");
    const [width, setWidth] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (newColor.length === 0) {
            return;
        }
        const boxInfo = [newColor, height + "px", width + "px"];
        setColorList([...colorList, boxInfo])
        setNewColor("");

    }

    const handleColorChange = (e) => {
        const color = e.target.value;
        setNewColor(color);
    }

    const handleHeightChange = (e) => {
        const height = e.target.value;
        setHeight(height);
    }

    const handleWidthChange = (e) => {
        const width = e.target.value;
        setWidth(width);
    }

    return(
        <div className="container">
            <h1>Color</h1>
            <form onSubmit={ (e) => handleSubmit(e) }>
                <input type="text" name="color" value={newColor} onChange={ (e) => handleColorChange(e) }/>
                <input type="number" name="color" value={height} onChange={ (e) => handleHeightChange(e) }/>
                <input type="number" name="color" value={width} onChange={ (e) => handleWidthChange(e) }/>

                <button>Add</button>
            </form>


            <main className="flex flex-wrap">
                {colorList.map((color) => {
                    console.log(color);
                    return(
                        <section className="box" style={{backgroundColor: color[0], height: color[1], width: color[2]}}></section>
                    )
                })}
            </main>
        </div>


    )
}

export default UserForm;