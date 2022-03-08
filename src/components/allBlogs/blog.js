export default function singlePost({ blog }) {
  const { title, body } = blog;

  return (
    <div className='singlePost'>
      {/* <div>{decodeURIComponent(title)}</div> */}
      <div style={{ marginTop: '1rem' }}>{decodeURIComponent(body)}</div>
    </div>
  );
}
