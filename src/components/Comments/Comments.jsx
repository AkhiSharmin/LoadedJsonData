import { useLoaderData } from "react-router-dom";
import Comment from "../Comment/Comment";

const Comments = () => {
  const comments = useLoaderData();
  return (
    <div>
      <h2>Hello All Comments: {comments.length}</h2>
      <div className="gridStyle">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment}></Comment>
        ))}
      </div>
    </div>
  );
};

export default Comments;
