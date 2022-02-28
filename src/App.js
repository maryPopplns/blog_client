import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    (async () => {
      const result = await fetch('https://knight-blog.herokuapp.com/');
    })();
  }, []);

  return <div className='App'></div>;
}

export default App;
