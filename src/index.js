import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from "react-redux";
import counterReducer from './reducers';
import CounterConnected from './containers/CounterConnected';

// Store
const store = createStore(
    counterReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// DOM
ReactDOM.render(
    <div>
        <Provider store={ store }>
            <CounterConnected />
        </Provider>
    </div>,
    document.getElementById('root')
);
