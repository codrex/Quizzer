import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import reducers from '../reducers';
import sagas from '../sagas';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  connectRouter(history)(reducers),
  composeWithDevTools(applyMiddleware(sagaMiddleware, routerMiddleware(history))),
);
sagaMiddleware.run(sagas);

export default store;
