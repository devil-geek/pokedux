import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "./reducers";

const initialState = {
  pokemons: {},
  pagination: {
    pages: {},
    currentPage: 0,
    numPages: 0,
    loading: true,
    limit: 20,
  },
};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
