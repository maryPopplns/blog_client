import './App.scss';
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const homeLink = '</Blog>';

  return (
    <div className='App'>
      <nav className='main-nav'>
        <ul>
          <li>
            <Link to=''>{homeLink}</Link>
          </li>
          {loggedIn ? (
            <div className='loginSignUpContainer'>
              <li>
                <Link to='login'>Login</Link>
              </li>
              <li>
                <Link to='signup'>Sign Up</Link>
              </li>
            </div>
          ) : (
            <div>hanburger button</div>
          )}
          {loggedIn && <h1>logged in</h1>}
        </ul>
      </nav>
      <button onClick={() => setLoggedIn((prev) => !prev)}>click me</button>
      <Outlet />
    </div>
  );
}
