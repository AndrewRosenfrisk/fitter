import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const NAVITEMS = [
  { id: "page-home", path: "/", title: "Home" },
  { id: "page-food", path: "/FoodPage", title: "Food" },
  { id: "page-activity", path: "/activity", title: "Activity" },
  { id: "page-biometric", path: "/biometric", title: "Biometric" }
];

const FOODITEMS = [
  { id: "fooditem-0", selected: false, name: "Mushrooms", servingSize: 3, calories: 100 },
  { id: "fooditem-1", selected: true, name: "Steak Filet", servingSize: 10, calories: 300 },
  { id: "fooditem-2", selected: false, name: "Spaghetti", servingSize: 5, calories: 500 },
]

ReactDOM.render(
  <React.StrictMode>
    <App navItems={NAVITEMS} foodItems={FOODITEMS} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
