import React from 'react';
import ReactDOM from 'react-dom';

import BadgePageNew from "./pages/BadgeNew";


import "bootstrap/dist/css/bootstrap.css";
import "./global.css"

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render( <BadgePageNew/>, container);
