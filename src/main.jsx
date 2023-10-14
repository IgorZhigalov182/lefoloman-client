import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/reset.scss';
import './styles/index.css';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './services/reducers';
import thunk from 'redux-thunk';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose; 

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
