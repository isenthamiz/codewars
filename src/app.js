import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
require('es6-promise').polyfill();
import axios from 'axios';

import AppRouter from './router/AppRouter';
import configureStore from './store/configureStore';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import 'bootstrap/dist/js/bootstrap.min.js';
import $ from 'jquery';
import Popper from 'popper.js';


import './styles/styles.scss';
import 'normalize.css/normalize.css';


const store = configureStore();

let currentStage;
let token;

const unsubscribe = store.subscribe(() => {
    currentStage = store.getState();
    token = currentStage.token;
    console.log(currentStage.token);
})

axios.defaults.baseURL = process.env.__HOST_NAME;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

// axios.interceptors.request.use((request)=>{
//     request.headers.Authorization = `Bearer ${token}`;
//     console.log(request);
//     return request;
// }, (error)=>{
//     // logger.log(error);
//     return Promise.reject(error);
// });

// axios.interceptors.response.use((response)=>{
//     // logger.log(response);
//     return response;
// }, (error)=>{
//     // logger.log(error);
//     return Promise.reject(error);
// })

const jsx = (
    
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx,document.getElementById('App'));