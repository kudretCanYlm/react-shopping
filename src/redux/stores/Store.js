import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { createDevTools } from '@redux-devtools/core';
import Reducers from '../reducers/Reducer';

//devam et https://github.com/gothinkster/react-redux-realworld-example-app/blob/master/src/store.js

const Store = createStore(Reducers);

export default Store;
