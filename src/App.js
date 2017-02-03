import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
import {AsyncStorage} from 'react-native';
import { composeWithDevTools } from 'remote-redux-devtools'
import reducers from './reducers';
import Router from './Router';
import Settings from './json/settings';

export default class App extends Component {

  render() {

    const enhancer = composeWithDevTools(
      applyMiddleware(ReduxThunk),
      autoRehydrate()
    );

    const store = createStore(
      reducers,
      {},
      enhancer
    );

    persistStore(store, { whitelist: Settings.persistantStates, storage: AsyncStorage });

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
