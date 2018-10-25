import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducer from './reducers';
import rootSaga from './sagas';

const persisConfig = {
  key: 'root',
  storage,
  blacklist: ['dialog']
}

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedReducer = persistReducer(persisConfig, reducer);
const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(...middleware)));
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export default () => {
  return {
    store,
    persistor
  }
};
