import { useSelector } from "react-redux";

const ResultadoPokemon = () => {
  const buscador = useSelector((state) => state.buscador);
  //console.log(buscador.pokemon.abilities[0].ability.name);
  return (
    <div>
      <h3 className="text-dark">Resultado: </h3>
      {buscador.loading && <div className="text-warning">Buscando</div>}
      {buscador.error === "" && buscador.pokemon.sprites !== undefined && (
        <div className="d-flex justify-content-between">
          <div className="text-success col-6">
            <p>Pokemon Encontrado</p>
            <img
              src={buscador.pokemon.sprites.front_default}
              width={170}
              alt="pokemon"
            />
          </div>
          <div className="col-6">
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
                  Habilidad {index + 1}: <span>{abilities.ability.name} </span>
                </p>
              );
            })}
          </div>
        </div>
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
