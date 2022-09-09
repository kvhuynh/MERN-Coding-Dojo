# Creating React app
  ```terminal 
 npx create-flask-app app_name_here
  ```
# Downloading dependencies
- ```terminal
  npm install axios
  ```
- ```terminal
  npm install react-router-dom
  ```


# Running React server
```terminal
npm start
```

# index.js file in app src folder
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

```

# app.js
```js
import React from "react";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
//Remember, we can write these functional components in their own files 
//to be exported and imported to the App component.
//We've combined them here to simplify our example.
const Home = (props) => { 
  return (
    <h1 style={{color: "red"}}>Home Component</h1>
  );
}
    
const About = (props) => {
  return (
    <h1 style={{color: "blue"}}>About Component</h1>
  );
}
    
function App() {
  return (
    <div>
      <h1>Routing Example</h1>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
    
export default App

```