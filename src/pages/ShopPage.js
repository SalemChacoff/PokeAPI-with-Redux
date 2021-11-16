import CantidadPokemon from "../components/CantidadPokemon";
import CompraPokemon from "../components/CompraPokemon";
import pokeimg from "../img/pokemon.png";

const ShopPage = () => {
  return (
    <div className="App container">
      <div className="row">
        <div className="col-12">
          <div className="card mt-5" style={{ maxWidth: "370px" }}>
            <div className="row no-gutters">
              <div className="col-4">
                <img
                  src={pokeimg}
                  alt="pokemon"
                  className="card-img"
                  width="300px"
                />
              </div>
              <div className="col-8">
                <div className="card-body">
                  <div className="card-title h3 text-center">
                    <CantidadPokemon />
                  </div>
                  <CompraPokemon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
