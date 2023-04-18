import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from './actions/postActions';
import './AddPostForm.css';

const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleIsAnonymousChange = (event) => {
    setIsAnonymous(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(addPost(title, content, isAnonymous));
    setTitle('');
    setContent('');
    setIsAnonymous(false);
  };

  return (
    <form className="add-post-form" onSubmit={handleSubmit}>
      <h2>Add Post</h2>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={handleTitleChange} />
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <textarea id="content" value={content
