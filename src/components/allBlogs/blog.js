import { Link, Outlet } from 'react-router-dom';
import './blog.scss';

export default function singlePost({ blog }) {
  const { _id, title, body } = blog;

  return (
    <Link to={_id} className='singlePost'>
      <div className='blogTitle'>{title}</div>
      <div className='blogBody'>{body}</div>
    </Link>
  );
}
