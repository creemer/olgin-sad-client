import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./store/UserStore";
import FlowerStore from "./store/FlowerStore";
import BasketStore from './store/BasketStore';

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        flower: new FlowerStore(),
        basket: new BasketStore()
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);

