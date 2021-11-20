import { useState } from "react";
import { useDispatch } from "react-redux";
import fetchPokemon from "../../redux/actions/buscadorAction";

const BuscadorPokemon = () => {
  const dispatch = useDispatch();
  const [pokemon, setPokemon] = useState("");

  const handleChange = (e) => {
    setPokemon(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchPokemon(pokemon.toLowerCase()));
  };

  return (
    <form className="form-group" onSubmit={handleSubmit}>
      <label htmlFor="buscar_pokemon">
        <p className="text-primary">Buscar Pokémon</p>
      </label>
      <input
        type="text"
        className="form-control"
        id="buscar_pokemon"
        value={pokemon}
        placeholder="Buscar pokemon por ejemplo: pikachu"
        onChange={(e) => handleChange(e)}
      />
      <input className="btn btn-primary mt-3" value="Buscar" type="submit" />
    </form>
  );
};

export default BuscadorPokemon;
