import { combineReducers } from "redux";
import pokemons from "./pokemons-reducer";
import pagination from "./pagination-reducer";

export default combineReducers({ pokemons, pagination });
