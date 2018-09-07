/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import './styles/index.scss';
import App from './App';
import Error from './components/screens/Error';
import store, { history } from './store';

ReactDOM.render(
  <Error>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </Error>,
  document.getElementById('root'),
);
