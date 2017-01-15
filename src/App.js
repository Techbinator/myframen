import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

export default class App extends Component {

  render() {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(ReduxThunk)));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
