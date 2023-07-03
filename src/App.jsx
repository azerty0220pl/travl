import Login from "./pages/Login";
import './App.css';
import { createContext, useReducer } from "react";
import Menu from "./components/advanced/Menu";
import RoutesComponent from "./components/advanced/RoutesComponent";

const reducerActions = {
  "login": (state, action) => {
    return { ...state, authenticated: action.success };
  },
  "page": (state, action) => {
    return { ...state, page: action.page };
  }
}

const defaultContext = {
  authenticated: false,
  username: "",
  email: "",
  page: "Dashboard"
};

const Context = createContext(defaultContext);

const reducer = (state, action) => {
  return reducerActions[action.type] === undefined ?
    defaultContext
    :
    reducerActions[action.type](state, action);
}

const App = () => {
  let [state, dispatch] = useReducer(reducer, defaultContext);

  return (
    <Context.Provider value={state}>
      {
        state.authenticated ?
          <Menu title={state.page} Page={RoutesComponent} dispatch={dispatch} />
          :
          <Login dispatch={dispatch} />
      }
    </Context.Provider>);
}

export default App;