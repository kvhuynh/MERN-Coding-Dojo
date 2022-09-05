import { useState } from "react";

export const BoxDisplay = (props) => {
    console.log(props);
    const [colorList, setColorList] = useState([]) 
    
    return(
        <main className="flex-row flex-wrap">
            {colorList.map((card, i) => {
                return(
                    <section className="box" style={{backgroundColor: props.color[i]}}></section>
                )
            })}
        </main>
        // <p style={{backgroundColor: props.color}} className="box">{props.color}</p>
        )
}

export default BoxDisplay;