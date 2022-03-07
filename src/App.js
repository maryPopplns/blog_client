import './App.scss';
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  function modalHandler() {
    const container = Array.from(
      document.getElementsByClassName('loginSignUpContainer')
    )[0];
    const overlay = Array.from(
      document.getElementsByClassName('modalOverlay')
    )[0];
    overlay.classList.toggle('openModalOverlay');
    container.classList.toggle('closeModal');
    container.classList.toggle('openModal');
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
                <Link
                  to='login'
                  className='login-link anchorLink'
                  onClick={modalHandler}
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to='signup'
                  className='signup-link anchorLink'
                  onClick={modalHandler}
                >
                  Sign Up
                </Link>
              </li>
              <button onClick={modalHandler}>close</button>
            </div>
          )}
          <div className='modalOverlay'></div>
          {loggedIn && (
            <li>
              <div>picture</div>
            </li>
          )}
          {!loggedIn && (
            <FaBars onClick={modalHandler} className='hamburger-menu' />
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
