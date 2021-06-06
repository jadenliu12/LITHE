import React from 'react';
import ReactDOM from 'react-dom';

import Main from 'components/Main.jsx';

import 'bootstrap/dist/css/bootstrap.css';

import Amplify from "aws-amplify";
import config from "./aws-exports";

Amplify.configure(config);

window.onload = function () {
  ReactDOM.render(<Main />, document.getElementById('root'));
};
