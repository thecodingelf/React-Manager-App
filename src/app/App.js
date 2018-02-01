import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// Firebase.
import firebase from 'firebase';
import { FIREBASE_CONFIG } from './Credentials';
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers';
import LoginForm from '../components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {


    firebase.initializeApp(FIREBASE_CONFIG);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;