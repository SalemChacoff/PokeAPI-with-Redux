import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import ShopPage from "./pages/ShopPage";
import BuscadorPokemon from "./components/buscador/BuscadorPokemon";
import ResultadoPokemon from "./components/buscador/ResultadoPokemon";

function App() {
  console.log(store.getState());

  return (
    <Provider store={store}>
      <ShopPage />
      <div className="col-8 ml-5 border-top pt-3">
        <BuscadorPokemon />
      </div>
      <div className="col-12">
        <ResultadoPokemon />
      </div>
    </Provider>
  );
}

export default App;
