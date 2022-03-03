// import './App.scss';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <button onClick={() => setCount((prev) => prev + 1)}>press</button>
      <div>{count}</div>
    </div>
  );
}

export default App;
