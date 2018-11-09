import React from 'react';
import ReactDOM from 'react-dom';
import { Router, BrowserHistory } from "react-router";
import { BrowserRouter } from 'react-router-dom';

import 'normalize.css';
import './index.less';

import Routes from "./router/routes";
import App from "./app/App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.getElementById('root'));
