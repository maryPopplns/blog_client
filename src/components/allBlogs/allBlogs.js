import { useEffect, useState } from 'react';
import Blog from './blog';
import './allBlogs.scss';

export default function AllBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch('https://knight-blog.herokuapp.com/');
      const { blogs } = await response.json();
      await setBlogs(blogs);
    })();
  }, []);

  const allBlogPosts = blogs.map((blog, i) => {
    return <Blog key={i} blog={blog} />;
  });

  return <div className='allPosts'>{allBlogPosts}</div>;
}
