import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const NAVITEMS = [
  { id: "page-home", path: "/", title: "Home" },
  { id: "page-food", path: "/food", title: "Food" },
  { id: "page-activity", path: "/activity", title: "Activity" },
  { id: "page-biometric", path: "/biometric", title: "Biometric" }
];

ReactDOM.render(
  <React.StrictMode>
    <App navItems={NAVITEMS} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
