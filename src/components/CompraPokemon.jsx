//import { connect } from "react-redux";
import {
  buy_pokemon_action,
  return_pokemon_action,
} from "../redux/actions/gameShopAction";
import { useDispatch } from "react-redux";

const CompraPokemon = () => {
  //const { buy_pokemon_action } = props;
  //const { return_pokemon_action } = props;

  const dispatch = useDispatch();

  return (
    <div>
      <button
        className="btn btn-dark btn-sm mb-2"
        onClick={() => {
          dispatch(buy_pokemon_action(1));
        }}
      >
        Comprar Pokemon
      </button>
      <button
        className="btn btn-dark btn-sm mb-1"
        onClick={() => {
          dispatch(return_pokemon_action(1));
        }}
      >
        Regresar Pokemon
      </button>
    </div>
  );
};

export default CompraPokemon;
/* 
const mapDispatchToProps = {
  buy_pokemon_action,
  return_pokemon_action,
};

export default connect(null, mapDispatchToProps)(CompraPokemon); */
