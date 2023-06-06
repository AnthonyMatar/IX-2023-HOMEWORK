import React from "react";

export default function PokemonTable(props) {
  return (
    <div>
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Pokemon Name</th>
          </tr>
        </thead>
        <tbody id="table-body">
          {props.pokemons.map((pokemon) => {
            return (
              <tr key={pokemon.name}>
                <td>{pokemon.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
