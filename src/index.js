import React from 'react';                  // to build react apps
import ReactDOM from 'react-dom';           //to build react based web applications
import './css/index.css';                       
import App from './Component/App.js';                    
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';  //bootstrap.css
import 'jquery/dist/jquery.js'              // jquery to handle short and feature rich js.
import 'bootstrap/dist/js/bootstrap.js'     //  bootstap.js



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
