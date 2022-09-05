import UserForm from "./components/UserForm";
import BoxDisplay from "./components/BoxDisplay";
import "./styles.css"
import { useState } from "react";

function App() {
  const [currentColor, setCurrentColor] = useState("currently there are no colors");

  const newColoredBox = ( newColor ) => {
    setCurrentColor( newColor )
  }


  return (
    <div className="App">
      <UserForm getNewColor={ newColoredBox }></UserForm>
      <BoxDisplay color={ currentColor }></BoxDisplay>
    </div>
  );
}

export default App;
