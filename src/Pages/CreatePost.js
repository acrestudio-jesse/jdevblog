import './CreatePost.css';
import { useEffect, useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from '../firebase-config';
import { useNavigate } from 'react-router-dom';

const CreatePost = ({ isAuth }) => {
  const [title, setTitle] = useState('');
  const [postText, setPostText] = useState('');

  const postCollectionRef = collection(db, 'posts');
  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate('/');
  };

  useEffect(() => {
    if (!isAuth) {
      navigate('/login');
    }
  }, []);
  return (
    <div className="createPostPage">
      <div className="createContainter">
        <h1>Create A Post</h1>
        <div className="input inputTitle">
          <label> Title: </label>
          <input
            placeholder="Title..."
            onChange={e => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="input input-text">
          <label> Post: </label>
          <textarea
            placeholder="Post..."
            onChange={e => {
              setPostText(e.target.value);
            }}
          />
        </div>
        <button onClick={createPost}>Submit Post</button>
      </div>
    </div>
  );
};

export default CreatePost;
