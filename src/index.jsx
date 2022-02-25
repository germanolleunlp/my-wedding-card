import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';
import smoothscroll from 'smoothscroll-polyfill';
import './index.css';
import App from './App';
import GameBox from './GameBox';
import reportWebVitals from './reportWebVitals';

// kick off the polyfill!
smoothscroll.polyfill();

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route exact path="/game" element={<GameBox />} />
        <Route path="*" element={<App />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
