import './App.scss';
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

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
            <li>
              <div>profile picture</div>
            </li>
          )}
          <FaBars className='hamburger-menu' />
        </ul>
      </nav>
      <button onClick={() => setLoggedIn((prev) => !prev)}>click me</button>
      <Outlet />
    </div>
  );
}
