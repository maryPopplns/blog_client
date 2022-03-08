import './App.scss';
import { Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaBars, FaRegTimesCircle } from 'react-icons/fa';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    function resizeHandler() {
      // close modal & removes overlay (when window.length > 765px)
      const modal = Array.from(
        document.getElementsByClassName('loginSignUpContainer')
      )[0];
      const modalIsOpen = Array.from(modal.classList).includes('openModal');

      if (window.innerWidth >= 765 && modalIsOpen) {
        const overlay = Array.from(
          document.getElementsByClassName('modalOverlay')
        )[0];
        overlay.classList.remove('openModalOverlay');
        modal.classList.remove('openModal');
        modal.classList.add('closeModal');
      }
    }

    window.addEventListener('resize', resizeHandler);
  }, []);

  function modalHandler() {
    // opens & closes modal
    const container = Array.from(
      document.getElementsByClassName('loginSignUpContainer')
    )[0];
    const overlay = Array.from(
      document.getElementsByClassName('modalOverlay')
    )[0];
    const length = window.innerWidth;
    if (length < 765) {
      overlay.classList.toggle('openModalOverlay');
      container.classList.toggle('closeModal');
      container.classList.toggle('openModal');
    }
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
                  className='auth-link anchorLink'
                  onClick={modalHandler}
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to='signup'
                  className='auth-link anchorLink'
                  onClick={modalHandler}
                >
                  Sign Up
                </Link>
              </li>
              <FaRegTimesCircle
                className='closeModalButton'
                onClick={modalHandler}
              />
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
      <Outlet />
    </div>
  );
}
