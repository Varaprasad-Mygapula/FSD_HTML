
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//-----using react---
  let li_1=React.createElement("li",{},"Home");
  let li_2=React.createElement("li",{},"About");
  let ul=React.createElement("ul",{},[li_1,li_2]);
 
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(ul)
//--------using jsx---
 let menu=<ul>
  <li>Home page</li>
  <li>About page</li>
  </ul>
 root.render(menu);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );