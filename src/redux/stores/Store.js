import { applyMiddleware, createStore } from 'redux';
import Reducers from '../reducers/Reducer';
import thunkMiddleware from 'redux-thunk';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { PROJECT_LOADED } from 'redux/actions/project/ProjectAction';

const persistConfig = {
  key: 'root',
  storage
};

//const persistedReducer=persistReducer(persistConfig,Reducers)

//const middleware = routerMiddleware(browserHistory)

function logger({ getState }) {
  console.log(getState());
  return (next) => (action) => {
    console.log(action.type);
    if (action.type == PROJECT_LOADED) console.log('will dispatch', action);

    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action);

    if (action.type == PROJECT_LOADED) console.log('state after dispatch', getState());

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue;
  };
}

function authMiddleware() {
  return (next) => (action) => {
    const token = localStorage.getItem('token');

    if ((action?.errCode == 401 || token == null) && !action.type.includes('LOG')) {
      localStorage.removeItem('token');
      location.replace('http://localhost:3000/');

      toLogin();
    } else {
      next(action);
    }
  };
}

const Store =  createStore(Reducers, applyMiddleware(thunkMiddleware, logger, authMiddleware));

export default Store;
