import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'

import './index.css';
// import App from './App';
import HomeScreenView from './HomeScreen'
import * as serviceWorker from './serviceWorker';

// BACKEND ENDPOINT BASE URL
console.log(process.env.REACT_APP_API_URL);

ReactDOM.render(<HomeScreenView />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
