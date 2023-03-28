import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { createDevTools } from '@redux-devtools/core';
import Reducers from '../reducers/Reducer';
import thunkMiddleware from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { PROJECT_LOADED } from 'redux/actions/project/ProjectAction';

const persistConfig = {
  key: 'root',
  storage
};

//const persistedReducer=persistReducer(persistConfig,Reducers)

function logger({ getState }) {
  return (next) => (action) => {
    if (action.type == PROJECT_LOADED) console.log('will dispatch', action);

    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action);

    if (action.type == PROJECT_LOADED) console.log('state after dispatch', getState());

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue;
  };
}

const Store = createStore(Reducers, applyMiddleware(thunkMiddleware, logger));

export default Store;
