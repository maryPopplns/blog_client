import './App.scss';
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  function openModal() {
    const container = Array.from(
      document.getElementsByClassName('loginSignUpContainer')
    )[0];
    container.classList.add('openModal');
    container.classList.remove('closeModal');
  }
  function closeModal() {
    const container = Array.from(
      document.getElementsByClassName('loginSignUpContainer')
    )[0];
    container.classList.add('closeModal');
    container.classList.remove('openModal');
  }

  return (
    <div className='App'>
      <nav className='main-nav'>
        <ul>
          <li>
            <Link to='' className='homepage-link anchorLink'>{`</Blog>`}</Link>
          </li>
          {!loggedIn && (
            <div className='loginSignUpContainer closeModal'>
              <li>
                <Link to='login' className='login-link anchorLink'>
                  Login
                </Link>
              </li>
              <li>
                <Link to='signup' className='signup-link anchorLink'>
                  Sign Up
                </Link>
              </li>
              <button onClick={closeModal}>close</button>
            </div>
          )}
          {loggedIn && (
            <li>
              <div>picture</div>
            </li>
          )}
          {!loggedIn && (
            <FaBars onClick={openModal} className='hamburger-menu' />
          )}
        </ul>
      </nav>
      <button onClick={() => setLoggedIn((prev) => !prev)}>
        {loggedIn ? 'logout' : 'login'}
      </button>
      <Outlet />
    </div>
  );
}
