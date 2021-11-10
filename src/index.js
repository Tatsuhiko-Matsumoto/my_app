import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth: {
      region: 'us-west-2',
      userPoolId: 'us-west-2_4EaKYUnj7',
      userPoolWebClientId: '4achf6nr6fb27q0rcujalqe4fh'
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// var element = React.createElement('h1', { className: 'greeting' }, 'Hello, world!');
// ReactDOM.render(element, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

serviceWorker.unregister();
