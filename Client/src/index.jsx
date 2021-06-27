import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {Provider} from 'react-redux';

import Main from 'components/Main.jsx';
import {auth, authWarn} from 'states/auth-reducers.js';
import {calProgress, sleepProgress, waterProgress} from 'states/userHome-reducers.js';
import {main} from 'states/main-reducers.js';

import 'bootstrap/dist/css/bootstrap.css';

import Amplify from "aws-amplify";
import config from "./aws-exports";

Amplify.configure(config);

window.onload = function () {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(combineReducers({
    auth, authWarn,
    calProgress, sleepProgress, waterProgress,
    main,
  }), composeEnhancers(applyMiddleware(thunkMiddleware/*, loggerMiddleware*/)));

  ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById('root')
);
};
