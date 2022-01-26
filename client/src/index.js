import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from "react-router-dom"

import store from './redux/store';
import { Provider } from 'react-redux';

import App from './App';
import './main.sass'


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
