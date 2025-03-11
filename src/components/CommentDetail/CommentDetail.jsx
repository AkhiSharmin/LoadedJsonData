import { useLoaderData } from "react-router-dom";

const CommentDetail = () => {
  const commentDetail = useLoaderData();
  const { id, name, email, body } = commentDetail;
  return (
    <div className="postBox">
      <h2>Comment ID: {id}</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>
        <small>{body}</small>
      </p>
    </div>
  );
};

export default CommentDetail;
