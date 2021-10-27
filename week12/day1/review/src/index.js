import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from "redux";
// building a warehouse on some land
import { Provider } from "react-redux";
// land that warehouse is being built on
import logger from "redux-logger";
import rootReducer from './redux/reducers/rootReducer';

const store = createStore (rootReducer, applyMiddleware(logger))
// store is now filled with employees

ReactDOM.render(
  <React.StrictMode>
    <Provider store ={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


