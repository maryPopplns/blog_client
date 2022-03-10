import { useState } from 'react';
import { urlencoded } from '../helpers';
import { useParams } from 'react-router-dom';

export default function BlogPost() {
  const [error, setError] = useState(false);
  const { blogPost } = useParams();

  function submitHandler() {
    const url = `https://knight-blog.herokuapp.com/blog/${blogPost}/comment`;
    const author = '621bb3314cf6388f2feaedc7';
    const comment = 'this is the comment';
    const commentInfo = urlencoded({ author, comment });

    const myStorage = window.localStorage;
    const authToken = myStorage.getItem('knightBlogToken');

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${authToken}`,
      },
      body: commentInfo,
    })
      .then((response) => {
        // if (response.status !== 200) {
        //   // throw new Error();
        // } else {
        // setError(false);
        return response.json();
        // }
      })
      .then((json) => {
        console.log(json);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className='blogpost'>
      <button onClick={submitHandler}>submit comment</button>
      <div>{error.toString()}</div>
    </div>
  );
}
