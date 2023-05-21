import { applyMiddleware, createStore } from 'redux';
import Reducers from '../reducers/Reducer';
import thunkMiddleware from 'redux-thunk';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { PROJECT_LOADED } from 'redux/actions/project/ProjectAction';
import { logOut } from 'utils/Auth';

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

    if (
      (action?.errCode == 401 || token == null) &&
      !action.type.includes('LOG') &&
      !action.type.includes('SIGN')
    )
      logOut();
    else next(action);
  };
}

const Store = createStore(Reducers, applyMiddleware(thunkMiddleware, logger, authMiddleware));

export default Store;
