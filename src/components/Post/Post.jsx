import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title, body } = post;
  return (
    <div className="postBox">
      <h2>Post of ID: {id}</h2>
      <p>Title: {title}</p>
      <p>{body}</p>
      <button>
        <Link to={`/post/${id}`}>Post Detail</Link>
      </button>
    </div>
  );
};

export default Post;
