import React from 'react';
import ReactDOM from 'react-dom/client';
import Item from "./components/Item";
import reportWebVitals from './reportWebVitals';
import item from "./data/data";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Item props={ item }/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
