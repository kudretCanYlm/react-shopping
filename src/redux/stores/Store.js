import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import Reducers from '../reducers/Reducer';

//devam et https://github.com/gothinkster/react-redux-realworld-example-app/blob/master/src/store.js