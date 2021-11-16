import { useSelector } from "react-redux";
import { useEffect } from "react";
import ResultadoEncontrado from "./ResultadoEncontrado";
import ResultadoNoEncontrado from "./ResultadoNoEncontrado";

const ResultadoPokemon = () => {
  const buscador = useSelector((state) => state.buscador);
  console.log(buscador.error);
  return (
    <div>
      <h3 className="text-dark">Resultado: </h3>
      {buscador.loading && <div className="text-warning">Buscando</div>}
      {buscador.error === "" && buscador.pokemon.sprites !== undefined && (
        <div className="text-success">
          <img src={buscador.pokemon.sprites.front_default} alt="pokemon" />
          <span>{buscador.pokemon.name}</span>
        </div>
      )}
      {buscador.error !== "" && <span className="text-danger">Error</span>}
    </div>
  );
};
//
//{}
export default ResultadoPokemon;
