import './App.scss';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <button onClick={() => setCount((prev) => prev + 1)}>press</button>
      <div>{count}</div>
      <Outlet />
    </div>
  );
}
