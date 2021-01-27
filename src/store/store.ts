import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import * as rootSaga from '../sagas/index';
import rootReducer from '../reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

const sagaConnect = () => Object.values(rootSaga).map((saga)=>sagaMiddleware.run(saga))

const middleware = composeWithDevTools(applyMiddleware(
  sagaMiddleware
))

const createStoreWithMiddleware = middleware(createStore)

export type RootState = ReturnType<typeof rootReducer>

export const store = createStoreWithMiddleware(rootReducer);

sagaConnect();

