import './App.scss';
import { Link, Outlet } from 'react-router-dom';

export default function App() {
  const homeLink = '</Blog>';
  return (
    <div className='App'>
      <nav>
        <ul>
          <li>
            <Link to=''>{homeLink}</Link>
          </li>
          <li>
            <Link to='login'>Login</Link>
          </li>
          <li>
            <Link to='signup'>Sign Up</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
