import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

export default function (initialSate = {}) {
    const enhancers = [
        applyMiddleware(thunk)
    ];
    // if(process.env.NODE_ENV !== 'production') {
    //     window.__REDUX_DEVTOOLS_EXTENSION__ && enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__())
    // }

    const store = createStore(rootReducer, initialSate, compose(...enhancers));

    if (module.hot) {
        module.hot.accept('./reducer', () => {
            const nextReducer = require('./reducer').default;
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}