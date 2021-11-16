import { useSelector } from "react-redux";
import Spinner from "../Spinner";

const ResultadoPokemon = () => {
  const buscador = useSelector((state) => state.buscador);
  console.log(buscador.loading);
  return (
    <div>
      {buscador.loading && (
        <>
          <Spinner />
          <div className="text-warning">Buscando...</div>
        </>
      )}
      {buscador.error === "" && buscador.pokemon.sprites !== undefined && (
        <>
          <h3 className="text-dark">Resultado: </h3>
          <div className="d-flex justify-content-between">
            <div className="text-success col-sm-6 border border-dark-gray rounded">
              <p className="text-center">Pokémon Encontrado</p>
              <img
                src={buscador.pokemon.sprites.front_default}
                width={170}
                alt="pokemon"
              />
            </div>
            <div className="col-sm-4">
              <p>
                Nombre:
                <span> {buscador.pokemon.name} </span>
              </p>
              <p>
                Altura:
                <span> {buscador.pokemon.height / 10} </span>
                Metros
              </p>
              <p>
                Peso:
                <span> {buscador.pokemon.weight} </span>
                Kg
              </p>
              {buscador.pokemon.abilities.map((abilities, index) => {
                return (
                  <p>
                    Habilidad {index + 1}:{" "}
                    <span>{abilities.ability.name} </span>
                  </p>
                );
              })}
            </div>
          </div>
        </>
      )}
      {buscador.error !== "" && (
        <span className="text-danger">{buscador.error}</span>
      )}
    </div>
  );
};
//
//{}
export default ResultadoPokemon;
