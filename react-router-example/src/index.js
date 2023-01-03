import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-route-dom';
import './index.css';
import App from './components/App';
import * as ServiceWorker from './serviceWorker';

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
ServiceWorker.unregister();
