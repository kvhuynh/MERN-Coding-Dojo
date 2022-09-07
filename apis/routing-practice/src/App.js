import './App.css';

import React from 'react';
import {Routes, Route, Link, useParams} from "react-router-dom";

const Home = (props) => {
  return (
    <div>
      <h1>Welcome</h1>
    </div>
  )
}

const Input = (props) => {
  const { number } = useParams();

  
  return (
    <div>
      <h1>{ number }</h1>
    </div>
  )
}

const MultiColorWord = (props) => {
  const { word, textColor, backgroundColor } = useParams();
  console.log(word, textColor, backgroundColor);

  return (
  <div>
    <h1 style={{color: textColor, backgroundColor: backgroundColor}}>{word}</h1>
  </div>
  )
}


function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/:number" element={<Input />}></Route>
        <Route path="/:word/:textColor/:backgroundColor" element={<MultiColorWord />}></Route>
      </Routes>
    </div>
  );
}

export default App;
