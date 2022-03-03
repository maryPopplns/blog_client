import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
// import './index.scss';
import App from './App';
import NewOne from './newOne';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/blog_client' element={<App />} />
        <Route path='/blog_client/new' element={<NewOne />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
