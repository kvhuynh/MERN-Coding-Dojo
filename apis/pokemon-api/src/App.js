import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [pokemonData, setPokemonData] = useState([]);


  const handleButton = (e) => {
    // axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    // .then(response => response.json())
    // .then(response => setPokemonData(response.results));
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    .then(response => setPokemonData(response.data.results))
  }

  return (
    <div>
      <button onClick={(e) => handleButton()}>fetch pokemon</button>
      {
        pokemonData && pokemonData.map((pokemon, index) => {
          return (<div>{index}: {pokemon.name}</div>)
        })
      }
    </div>
  );

}

export default App;
