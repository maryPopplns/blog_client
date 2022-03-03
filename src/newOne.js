import { useState } from 'react';

export default function NewOne() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <button onClick={() => setCount((prev) => prev + 1)}>new one</button>
      <div>{count}</div>
    </div>
  );
}
