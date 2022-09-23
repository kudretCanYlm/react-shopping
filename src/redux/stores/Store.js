import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { createDevTools } from '@redux-devtools/core';
import Reducers from '../reducers/Reducer';
//https://github.com/AliYildizoz909/photo-channel-spa/tree/master/src/redux/actions
//look https://github.com/gothinkster/react-redux-realworld-example-app/blob/master/src/store.js

function logger({ getState }) {
  return (next) => (action) => {
    console.log('test');
    console.log('will dispatch', action);

    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action);

    console.log('state after dispatch', getState());

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue;
  };
}

const Store = createStore(Reducers, applyMiddleware(logger));

export default Store;
