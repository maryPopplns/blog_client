// import './App.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <button onClick={() => setCount((prev) => prev + 1)}>press</button>
      <Link to='new'>new</Link>
      <div>{count}</div>
    </div>
  );
}
