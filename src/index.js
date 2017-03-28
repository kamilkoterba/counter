import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import { incrementAction, decrementAction } from './actions';
import counterReducer from './reducers';
import Counter from './components/Counter';

// Store
const store = createStore(counterReducer);

// DOM
const render = () => ReactDOM.render(
    <Counter
        value={ store.getState() }
        onIncrement={ () => store.dispatch(incrementAction) }
        onDecrement={ () => store.dispatch(decrementAction) }
    />,
    document.getElementById('root')
);

// Render and subscribe
render();
store.subscribe(render);
