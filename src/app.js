import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './router/AppRouter';

import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';

import './styles/styles.scss';



ReactDOM.render(<AppRouter />,document.getElementById('App'));