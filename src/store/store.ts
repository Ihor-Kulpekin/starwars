import {createStore, applyMiddleware, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from '../reducers/index';
import rootSaga from '../sagas/index';

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: 'root',
  storage,
};

const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== 'production') {
    const {composeWithDevTools} = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export function configureStore(initialState = {}) {
  const store: any = createStore(
    combineReducers({
      auth: persistReducer(persistConfig, rootReducer.auth),
    }),
    initialState,
    bindMiddleware([sagaMiddleware])
  );
  let persistor = persistStore(store);

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga);
  };

  store.runSagaTask();
  return {
    store,
    persistor,
  };
}
