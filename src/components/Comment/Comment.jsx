import { Link } from "react-router-dom";

const Comment = ({ comment }) => {
  const { id, name, email, body } = comment;
  return (
    <div className="postBox">
      <h2>Comment ID: {id}</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>
        <small>{body}</small>
      </p>
      <button>
        <Link to={`/comment/${id}`}>Comment Details</Link>
      </button>
    </div>
  );
};

export default Comment;
