import React from 'react';
import ReactDOM from 'react-dom';

import App from "./Components/main/App";

import "bootstrap/dist/css/bootstrap.css";
import "./global.css"

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render( <App/>, container);
