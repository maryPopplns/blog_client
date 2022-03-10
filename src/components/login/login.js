import axios from 'axios';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './login.scss';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function submitFormHandler(event) {
    event.preventDefault();
    const loginData = { username, password };
    let formBody = [];
    for (const property in loginData) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(loginData[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    fetch('https://knight-blog.herokuapp.com/login/local', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formBody,
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => console.log(error));
  }

  return (
    <div className='login'>
      <form id='loginForm' onSubmit={submitFormHandler}>
        <div className='username-field'>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            id='username'
            name='username'
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          ></input>
        </div>
        <div className='password-field'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          ></input>
        </div>
        <input type='submit'></input>
      </form>
    </div>
  );
}
