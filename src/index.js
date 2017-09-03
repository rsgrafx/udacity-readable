import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from  'react-redux';
import { compose } from 'redux'

import store from './store'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/*
  Create Store and apply logDetails middleware
*/

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter><App /></BrowserRouter>
  </Provider>
  , document.getElementById('root'));

  registerServiceWorker();
