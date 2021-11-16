import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import fetchPokemon from "../../redux/actions/buscadorAction";

const BuscadorPokemon = () => {
  const dispatch = useDispatch();
  const [pokemon, setPokemon] = useState("mewtwo");

  /*   const resultado = useCallback(() => {
    dispatch(fetchPokemon(pokemon));
  }, [dispatch, pokemon]); */

  const resultado = () => {
    dispatch(fetchPokemon(pokemon));
  };

  useEffect(() => {
    resultado();
  }, []);

  return (
    <div className="form-group">
      <label htmlFor="buscar_pokemon" className="text-dark">
        Buscar Pokemon
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
      <button className="btn btn-primary mt-3" onClick={resultado}>
        Enviar
      </button>
    </div>
  );
};

export default BuscadorPokemon;
