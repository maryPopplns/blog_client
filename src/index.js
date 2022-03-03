import './reset.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BlogPost from './components/blogPost/blogPost';
import Login from './components/login/login';
import SignUp from './components/signUp/signUp';
import AllBlogs from './components/allBlogs/allBlogs';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/blog_client' element={<App />}>
          <Route index element={<AllBlogs />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<SignUp />} />
          <Route path=':blogPost' element={<BlogPost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
