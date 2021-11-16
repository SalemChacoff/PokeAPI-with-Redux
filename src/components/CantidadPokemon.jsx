import { useSelector } from "react-redux";
//import { connect } from 'react-redux'

//Producto de la configuracion de abajo, por medio de los props, se obtiene el estado
const CantidadPokemon = () => {
  const { pokemon } = useSelector((state) => state.game_shop);
  return <>Unidades: {pokemon}</>;
};

export default CantidadPokemon;

//Antes de los HOOKS para conseguir el estado del store
/* // funcion para acceder al estado
const mapStateToProps = (state) => {
  return {
    game_shop: state.game_shop,
  };
};
//con mapstatetoprops connect buscara internamente el estado
//Para conectar el store con un componente de la app
export default connect(mapStateToProps)(CantidadPokemon); */
