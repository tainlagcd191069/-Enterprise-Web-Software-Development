import { useDispatch } from 'react-redux';
import { addPost } from './actions/postActions';

const AddPostPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const title = event.target.elements.title.value;
    const content = event.target.elements.content.value;

    dispatch(addPost(title, content, true)); // true để đăng bài ẩn danh
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" />
      </label>
      <br />
      <label>
        Content:
        <textarea name="content"></textarea>
      </label>
      <br />
      <button type="submit">Add Post</button>
    </form>
  );
};