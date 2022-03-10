import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { urlencoded } from '../helpers';
import './login.scss';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  function submitFormHandler(event) {
    event.preventDefault();
    const loginInfo = urlencoded({ username, password });

    fetch('https://knight-blog.herokuapp.com/login/local', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: loginInfo,
    })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error();
        } else {
          setError(false);
          return response.json();
        }
      })
      .then(({ token }) => {
        const myStorage = window.localStorage;
        myStorage.setItem('knightBlogToken', token);
        navigate('/blog_client');
      })
      .catch((error) => setError(true));
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
