import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from "react-redux";
import DevTools from "./containers/DevTools"
import counterReducer from './reducers';
import CounterConnected from './containers/CounterConnected';

// Store
const store = createStore(counterReducer, DevTools.instrument());

// DOM
ReactDOM.render(
    <div>
        <Provider store={ store }>
            <CounterConnected />
        </Provider>
        <DevTools store={ store } />
    </div>,
    document.getElementById('root')
);
