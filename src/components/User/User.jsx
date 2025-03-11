import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, phone, email } = user;
  const userStyle = {
    border: "2px solid red",
    padding: "5px",
    borderRadius: "20px",
    boxShadow: "44px 44px 30px rgba(0, 0, 0, 0.2)",
  };
  return (
    <div style={userStyle}>
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <Link to={`/user/${id}`}>Show Details</Link>
      <Link to={`/user/${id}`}>
        <button>Click Me</button>
      </Link>
    </div>
  );
};

export default User;
