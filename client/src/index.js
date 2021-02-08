import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import 'materialize-css/dist/css/materialize.min.css';

import App from './components/App'
import reducers from './reducers';

// for dev purposes
// import axios from 'axios';
// window.axios = axios;

const middleware = process.env.NODE_ENV === 'production' ? [thunk] : [thunk, logger];

const store = createStore(reducers, {}, applyMiddleware(...middleware));



ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);