import React from "react";
import Login from "./pages/Login";
import './App.css';
import { createContext, useReducer } from "react";
import Menu from "./components/advanced/Menu";
import RoutesComponent from "./components/advanced/RoutesComponent";

interface ActionInterface {
  type: string,
  success?: boolean,
  user?: string,
  page?: string,
  modal?: Function,
  mail?: string
}

interface ReducerInterface {
  [index: string]: (state: ContextInterface, action: ActionInterface) => ContextInterface
}
const reducerActions: ReducerInterface = {
  login: (state: ContextInterface, action: ActionInterface): ContextInterface => {
    return { ...state, authenticated: action.success as boolean, username: action.user as string };
  },
  page: (state: ContextInterface, action: ActionInterface): ContextInterface => {
    return { ...state, page: action.page as string};
  },
  modal: (state: ContextInterface, action: ActionInterface): ContextInterface => {
    return { ...state, modal: action.modal };
  },
  user: (state: ContextInterface, action: ActionInterface): ContextInterface => {
    return {...state, username: action.user as string, email: action.mail as string}
  },
  default: (state: ContextInterface, action: ActionInterface): ContextInterface => {
    return state;
  }
}


interface ContextInterface {
  authenticated: boolean,
  username: string,
  email: string,
  page: string,
  dispatch?: React.Dispatch<ActionInterface>,
  modal?: Function
};
const defaultContext: ContextInterface = {
  authenticated: false,
  username: "",
  email: "",
  page: "Dashboard"
};

export const Context = createContext<ContextInterface>(defaultContext);

const reducer = (state: ContextInterface, action: ActionInterface) => {
  return reducerActions[action.type] === undefined ?
    reducerActions["default"](state, action)
    :
    reducerActions[action.type as keyof ReducerInterface](state, action);
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, defaultContext);
  defaultContext.dispatch = dispatch;

  return (
    <Context.Provider value={state}>
      {
        state.authenticated ?
          <Menu Page={RoutesComponent} />
          :
          <Login />
      }
    </Context.Provider>
  );
}

export default App;