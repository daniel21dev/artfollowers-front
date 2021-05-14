import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import 'normalize.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

