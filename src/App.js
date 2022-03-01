import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [blogs, setBlogs] = useState([]);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://knight-blog.herokuapp.com/')
      .then((response) => response.json())
      .then(({ user, blogs }) => {
        setUser(user);
        setBlogs(blogs);
      })
      .catch((requestError) => {
        setError(requestError);
      });
  }, []);

  const blogPosts = blogs.map((blog) => console.log(blog));

  return <div className='App'></div>;
}

export default App;
