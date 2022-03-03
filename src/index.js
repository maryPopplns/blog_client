import './index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/blog_client' element={<App />}>
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<SignUp />} />
          <Route path=':blogPost' element={<BlogPost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
