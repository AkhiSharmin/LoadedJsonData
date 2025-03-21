import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const { id, title, body } = post;
  return (
    <div>
      <h2 className="textClr">Post Details About ID No: {id}</h2>
      <p>Title: {title}</p>
      <p>
        <small>{body}</small>
      </p>
    </div>
  );
};

export default PostDetails;
