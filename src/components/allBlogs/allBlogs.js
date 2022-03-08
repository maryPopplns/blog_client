import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function AllBlogs() {
  const [user, setUser] = useState(null);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    (async () => {
      // TODO calls to API to get all blogs
      const response = await fetch('https://knight-blog.herokuapp.com/');
      const { user, blogs } = await response.json();
      await setUser(user);
      await setBlogs(blogs);
    })();
  }, []);

  return <div className='blogpost'>{console.log(blogs)}</div>;
}
