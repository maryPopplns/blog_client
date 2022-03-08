import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import './reset.scss';
import BlogPost from './components/blogPost/blogPost';
import AllBlogs from './components/allBlogs/allBlogs';
import SignUp from './components/signUp/signUp';
import Login from './components/login/login';

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
