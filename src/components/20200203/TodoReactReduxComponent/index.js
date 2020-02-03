import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from './reducers'
import App from './components/App'

const store = createStore(rootReducer)

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
