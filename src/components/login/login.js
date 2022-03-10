import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { urlencoded, networkRequest } from './helpers';
import './login.scss';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  async function submitFormHandler(event) {
    event.preventDefault();
    const URL = 'https://knight-blog.herokuapp.com/login/local';
    const verb = 'POST';
    const loginInfo = urlencoded({ username, password });
    networkRequest(URL, verb, loginInfo, setError);
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
        {error && <div>There was an error</div>}
      </form>
    </div>
  );
}
