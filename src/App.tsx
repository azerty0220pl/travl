import React, { useEffect } from "react";
import Login from "./pages/Login";
import './App.css';
import { createContext, useReducer } from "react";
import Menu from "./components/advanced/Menu";
import RoutesComponent from "./components/advanced/RoutesComponent";
import { logged } from "./components/basic/loginLogic";
import { User } from "./components/redux/users/usersSlice";

export interface ActionInterface {
  type: string,
  success?: boolean,
  user?: User,
  page?: string,
  modal?: Function
}

interface ReducerInterface {
  [index: string]: (state: ContextInterface, action: ActionInterface) => ContextInterface
}
const reducerActions: ReducerInterface = {
  login: (state: ContextInterface, action: ActionInterface): ContextInterface => {
    if (!action.success)
      localStorage.clear();
    return { ...state, authenticated: action.success!, user: action.user! };
  },
  page: (state: ContextInterface, action: ActionInterface): ContextInterface => {
    return { ...state, page: action.page as string };
  },
  modal: (state: ContextInterface, action: ActionInterface): ContextInterface => {
    return { ...state, modal: action.modal };
  },
  user: (state: ContextInterface, action: ActionInterface): ContextInterface => {
    return { ...state, user: action.user as User }
  },
  default: (state: ContextInterface, _action: ActionInterface): ContextInterface => {
    return state;
  }
}


interface ContextInterface {
  authenticated: boolean,
  user?: User,
  page: string,
  dispatch?: React.Dispatch<ActionInterface>,
  modal?: Function
};
const defaultContext: ContextInterface = {
  authenticated: false,
  user: undefined,
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

  useEffect(() => {
    logged(dispatch);
  }, [dispatch]);

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