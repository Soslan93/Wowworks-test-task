import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App  from './components/app';
import { Provider } from "react-redux";
import store from './store';

import '../scss/custom.scss';


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('.root')
)
