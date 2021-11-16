import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import fetchPokemon from "../../redux/actions/buscadorAction";

const BuscadorPokemon = () => {
  const dispatch = useDispatch();
  const [pokemon, setPokemon] = useState("mewtwo");

  /*   const resultado = useCallback(() => {
    dispatch(fetchPokemon(pokemon));
  }, [dispatch, pokemon]); */

  const resultado = (e) => {
    e.preventDefault();
    dispatch(fetchPokemon(pokemon));
  };

  return (
    <form className="form-group">
      <label htmlFor="buscar_pokemon">
        <p className="text-primary">Buscar Pokemon</p>
      </label>
      <input
        type="text"
        className="form-control"
        id="buscar_pokemon"
        value={pokemon}
        onChange={(event) => {
          setPokemon(event.target.value);
        }}
      />
      <button className="btn btn-primary mt-3" onClick={(e) => resultado(e)}>
        Enviar
      </button>
    </form>
  );
};

export default BuscadorPokemon;
