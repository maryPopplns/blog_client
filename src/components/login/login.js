import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './login.scss';

export default function Login() {
  return (
    <div className='login'>
      <form action='https://knight-blog.herokuapp.com/login/local'>
        <div classname='username-field'>
          <label for='username'>Username</label>
          <input type='text' id='username' name='username'></input>
        </div>
        <div className='password-field'>
          <label for='password'>Password</label>
          <input type='text' id='password' name='password'></input>
        </div>
        <button type='submit'>submit</button>
      </form>
      <a href='https://knight-blog.herokuapp.com/login/google'>google</a>
    </div>
  );
}

// create a form to login with username/password
//  create a button to login to google
