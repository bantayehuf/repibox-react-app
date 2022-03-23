import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

// Used primereact UI library <https://www.primefaces.org/primereact/> 
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

// Custom Css
import './assets/scss/style.scss';

// Using redux as state manager may not be needed,
  // but I want to show that I have expriance to use redux.
import { store } from './store';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
  
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
