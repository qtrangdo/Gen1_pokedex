import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';

const App = () => (
  <Provider store={store}>
    <div>
      hello world!!
      <h1>hello World</h1>
    </div>
  </Provider>
);


export default App;