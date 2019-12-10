import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import App from './components/App'
import {saveState,loadState} from "./container/localstorage";

const persistedState = loadState();
const store = createStore(rootReducer,persistedState);
store.subscribe(() => {
    saveState({
        todos: store.getState().todos
    });
});


render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)