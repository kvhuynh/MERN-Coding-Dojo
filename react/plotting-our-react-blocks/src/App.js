import Header from "./components/Header.js"
import Navigation from "./components/Navigation.js";
import Main from "./components/Main.js";
import Subcontent from "./components/Subcontent.js";
import Advertisement from "./components/Advertisement.js";

import "./styles.css"

function App() {
  return (
    <div class="container">
        <Header />
        <Navigation />
        <Main subContent="subcontent">
          <Subcontent></Subcontent>
          <Subcontent></Subcontent>
          <Subcontent></Subcontent>
          <Advertisement></Advertisement>
        </Main>
    </div>
  );
}

export default App;
