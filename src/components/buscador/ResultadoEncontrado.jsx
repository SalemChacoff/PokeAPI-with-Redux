const ResultadoEncontrado = (buscador) => {
  return (
    <div className="text-success">
      <img src={buscador.pokemon.sprites.front_default} alt="pokemon" />
      <span>{buscador.pokemon.name}</span>
    </div>
  );
};

export default ResultadoEncontrado;
