import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PokemonTable from "./components/PokemonTable";
import { BasicPokemon } from "./models/basicPokemon";

function App() {
  const [pokemons, setPokemon] = useState([]);

  const url = "https://pokeapi.co/api/v2/pokemon";
  async function fetchPokemon() {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    let pokemonData = data.results.map((pokemon) => {
      return new BasicPokemon(pokemon.name);
    });
    // console.log(postData);

    setPokemon(pokemonData);
  }

  
  return (
    <div className="text-center">
      <button className="btn btn-primary mt-5" onClick={fetchPokemon}>
        Get Pokemon
      </button>
      <PokemonTable pokemons={pokemons}></PokemonTable>
    </div>
  );
}

export default App;
