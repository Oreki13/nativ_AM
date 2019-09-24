import React, {Component} from 'react';
import Router from './src/Route/index';
import store from './src/Publics/Redux/store';
import {Provider} from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
