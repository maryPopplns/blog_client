import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './login.scss';

export default function Login() {
  return (
    <div className='login'>
      <form
        method='POST'
        action='https://knight-blog.herokuapp.com/login/local'
      >
        <div className='username-field'>
          <label htmlFor='username'>Username</label>
          <input type='text' id='username' name='username'></input>
        </div>
        <div className='password-field'>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' name='password'></input>
        </div>
        <input type='submit'></input>
      </form>
      <a
        className='google-login'
        href='https://knight-blog.herokuapp.com/login/google'
      >
        Google Login
      </a>
    </div>
  );
}
