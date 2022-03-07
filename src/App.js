import './App.scss';
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className='App'>
      <nav className='main-nav'>
        <ul>
          <li>
            <Link to=''>{`</Blog>`}</Link>
          </li>
          {!loggedIn && (
            <div className='loginSignUpContainer'>
              <li>
                <Link to='login'>Login</Link>
              </li>
              <li>
                <Link to='signup'>Sign Up</Link>
              </li>
            </div>
          )}
          {loggedIn && (
            <li>
              <div>picture</div>
            </li>
          )}
          {!loggedIn && <FaBars className='hamburger-menu' />}
        </ul>
      </nav>
      <button onClick={() => setLoggedIn((prev) => !prev)}>
        {loggedIn ? 'logout' : 'login'}
      </button>
      <Outlet />
    </div>
  );
}
