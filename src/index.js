import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Context from './Store/Context'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import YoutubePlayer from './Pages/YoutubePlayer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context>
      <Router>
        <Routes>
          <Route path='/' Component={App}>

          </Route>
          <Route path='/watch' Component={YoutubePlayer}>

          </Route>
        </Routes>
      </Router>
    </Context>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

