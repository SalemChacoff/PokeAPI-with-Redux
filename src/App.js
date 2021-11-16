import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import BuscadorPokemon from "./components/buscador/BuscadorPokemon";
import ResultadoPokemon from "./components/buscador/ResultadoPokemon";
import pokeimg from "./img/pokemon.png";

function App() {
  console.log(store.getState());

  return (
    <Provider store={store}>
      <div className="col-4 m-3 border-top pt-3 mx-auto">
        <img
          src={pokeimg}
          alt="pokemon"
          className="card-img"
          style={{ width: "400px", height: "120px" }}
        />
      </div>
      <div className="col-4 m-3 border-top pt-3 mx-auto">
        <BuscadorPokemon />
      </div>
      <div className="col-4 m-3 mx-auto container-fluid">
        <ResultadoPokemon />
      </div>
    </Provider>
  );
}

export default App;
